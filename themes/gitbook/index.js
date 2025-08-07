/**
 * GitBook 主题主入口文件
 * 
 * 该文件定义了 GitBook 主题的核心布局结构和页面渲染逻辑，包括：
 * - 基础布局组件 LayoutBase：提供三栏式布局（左侧导航、中间内容、右侧目录）
 * - 首页布局 LayoutIndex：渲染网站首页
 * - 文章详情页布局 LayoutSlug：渲染单篇文章内容
 * 
 * 主题特点：
 * - 响应式设计：桌面端三栏布局，移动端单栏布局配合抽屉导航
 * - 深色模式支持：通过 Tailwind CSS 的 dark: 前缀实现
 * - 基于 Notion 的内容管理系统
 * - 支持文章目录、上一篇/下一篇导航等功能
 */

// 'use client' // 声明这是一个客户端组件，是 Next.js 13+ App Router 的特性

// 导入核心依赖
import NotionIcon from '@/components/NotionIcon' // 导入 Notion 图标组件，用于显示页面图标
import NotionPage from '@/components/NotionPage' // 导入 Notion 页面渲染组件，负责渲染 Notion 内容块
import { siteConfig } from '@/lib/config' // 导入网站配置，提供动态配置访问能力
import { useGlobal } from '@/lib/global' // 导入全局状态钩子，用于访问全局应用状态
import { isBrowser } from '@/lib/utils' // 导入判断是否在浏览器环境的工具函数，用于避免 SSR 问题

// 导入 Next.js 核心模块
import Head from 'next/head' // 导入 Next.js 的 Head 组件，用于修改页面头部信息（标题、meta 等）
import { useRouter } from 'next/router' // 导入 Next.js 的路由钩子，用于获取当前路由信息

// 导入 React 核心 API
import { createContext, useContext, useEffect, useRef, useState } from 'react' // 导入 React 的核心钩子

// 导入主题内部组件
import ArticleAround from './components/ArticleAround' // 导入"上一篇/下一篇"文章导航组件，在文章底部显示相关文章链接
import ArticleInfo from './components/ArticleInfo' // 导入文章信息组件，显示文章元数据（作者、日期等）
import BottomMenuBar from './components/BottomMenuBar' // 导入底部菜单栏组件（移动端），提供移动端快速导航
import Catalog from './components/Catalog' // 导入文章目录组件，自动生成文章目录树
import CatalogDrawerWrapper from './components/CatalogDrawerWrapper' // 导入目录抽屉包装器，移动端目录弹窗
import Design from './components/Design' // 导入 Design 组件，可能用于设计系统展示
import Header from './components/Header' // 导入头部导航栏组件，显示网站标题和主要导航
import Home from './components/Home' // 导入首页组件，渲染网站首页内容
import JumpToTopButton from './components/JumpToTopButton' // 导入返回顶部按钮组件，长页面滚动辅助
import NavPostList from './components/NavPostList' // 导入导航文章列表组件，左侧边栏的文章列表
import PageNavDrawer from './components/PageNavDrawer' // 导入页面导航抽屉组件（移动端），从左侧滑出的导航菜单

// 导入主题配置
import CONFIG from './config' // 导入 GitBook 主题的特定配置，包含主题特有的配置项
import { Style } from './style' // 导入主题的内联样式，包含主题的全局 CSS 样式定义

// 创建一个 React Context 用于在 GitBook 主题内部共享全局状态
const ThemeGlobalGitbook = createContext()
// 导出一个自定义钩子，方便子组件消费上面创建的 Context
export const useGitBookGlobal = () => useContext(ThemeGlobalGitbook)

/**
 * 基础布局组件 - LayoutBase
 * 
 * 这是 GitBook 主题的核心布局组件，负责整个网站的基础布局结构。
 * 采用响应式设计，在不同屏幕尺寸下展现不同的布局：
 * 
 * 桌面端（md 及以上）：
 * - 三栏式布局：左侧导航栏（80px 宽）+ 中间内容区 + 右侧目录栏（72px 宽，2xl 及以上）
 * - 固定侧边栏：使用 sticky 定位，滚动时保持可见
 * - 高度：100vh 占满整个视口高度
 * 
 * 移动端：
 * - 单栏式布局：仅显示主要内容区域
 * - 抽屉式导航：通过 PageNavDrawer 从左侧滑出
 * - 底部菜单栏：通过 BottomMenuBar 提供快速访问
 * 
 * @param {Object} props - 组件属性对象
 * @param {React.ReactNode} props.children - 子组件，即页面的主要内容
 * @param {Array} props.allNavPages - 所有导航页面的数据，用于构建左侧导航菜单
 * @param {Object} props.post - 当前文章对象（可选）
 * @param {Object} props.notice - 公告信息对象（可选）
 * @returns {JSX.Element} 返回完整的布局结构
 * @constructor
 */
const LayoutBase = props => {
  // 从 props 中解构出所需的数据
  const {
    children, // 子组件，即页面的主要内容，通常是当前页面的实际内容
    allNavPages // 所有导航页面的数据，用于构建左侧导航菜单和搜索功能
  } = props

  // 从全局状态获取配置信息
  const { fullWidth } = useGlobal() // 获取是否全宽布局的配置，影响侧边栏的显示

  // 路由相关
  const router = useRouter() // 获取 Next.js 路由实例
  const isHomePage = router.pathname === '/' // 判断当前是否为首页，用于特殊处理首页布局

  // 状态管理 - 移动端交互状态
  const [tocVisible, changeTocVisible] = useState(false) // 状态：文章目录抽屉是否可见（移动端专用）
  const [pageNavVisible, changePageNavVisible] = useState(false) // 状态：页面导航抽屉是否可见（移动端专用）
  const [filteredNavPages, setFilteredNavPages] = useState(allNavPages) // 状态：经过筛选的导航页面列表（支持搜索过滤）

  // Ref 引用
  const searchModal = useRef(null) // 创建一个 ref 用于引用搜索模态框组件，便于全局控制搜索功能

  // 副作用处理：当 allNavPages 数据发生变化时，同步更新 filteredNavPages
  // 这个 effect 支持实时搜索过滤功能，当用户搜索时更新显示的导航列表
  useEffect(() => {
    setFilteredNavPages(allNavPages)
  }, [allNavPages])

  // 使用 Context.Provider 将共享的状态和方法传递给所有子组件
  // 这样任何子组件都可以通过 useGitBookGlobal() 访问这些值
  return (
    <ThemeGlobalGitbook.Provider
      value={{
        searchModal,
        tocVisible,
        changeTocVisible,
        filteredNavPages,
        setFilteredNavPages,
        allNavPages,
        pageNavVisible,
        changePageNavVisible
      }}>
      {/* 注入主题的全局 CSS 样式，包含主题色、字体等定义 */}
      <Style />

      {/* 
        主题根容器
        使用固定的 id='theme-gitbook' 便于全局样式控制
        响应式内边距：移动端 pb-16 为底部菜单栏留出空间，桌面端 md:pb-0 不需要
      */}
      <div
        id='theme-gitbook'
        className={`${siteConfig('FONT_STYLE')} pb-16 md:pb-0 scroll-smooth bg-white dark:bg-black w-full h-full min-h-screen justify-center dark:text-gray-300`}>

        {/* 顶部导航栏 - 固定在页面顶部，提供全局导航功能 */}
        {/* <Header {...props} /> */}

        {/* 
          主要内容包装器
          使用 flex 布局实现三栏式结构
          支持 LAYOUT_SIDEBAR_REVERSE 配置实现侧边栏左右位置交换
          gap-x-6 提供栏间距，增强视觉分隔
        */}
        <main
          id='wrapper'
          className={`${siteConfig('LAYOUT_SIDEBAR_REVERSE') ? 'flex-row-reverse' : ''} relative flex justify-between gap-x-6 h-full mx-auto w-full`}>

          <Header {...props} />

          {/* 
            左侧边栏 - 导航菜单区域
            显示条件：
            1. 非全宽模式（!fullWidth）
            2. 非首页（!isHomePage）
            3. 桌面端（md:block）
            
            固定宽度：80px，使用 sticky 定位保持可见
            包含：文章导航列表（NavPostList）
          */}
          {fullWidth || isHomePage ? null : (
            <div className={'hidden md:block relative z-10 '}>
              {/* 
                左侧边栏容器
                固定宽度：w-80 (320px)
                固定定位：sticky top-0 保证滚动时保持可见
                高度：h-screen 占满全屏
                内边距：pt-14 为顶部导航栏留出空间，pb-4 底部间距
              */}
              <div className='w-80 pt-24 pb-4 sticky top-0 h-screen flex justify-between flex-col'>
                {/* 导航部分 - 可滚动区域 */}
                <div className='overflow-y-scroll scroll-hidden pt-10 pl-5'>
                  {/* 所有文章的导航列表 - 支持搜索过滤 */}
                  <NavPostList filteredNavPages={filteredNavPages} {...props} />
                </div>
              </div>
            </div>
          )}

          {/* 
            中间内容区域 - 页面主体
            使用 flex-1 占据剩余空间
            最小高度：min-h-screen 确保内容区至少占满一屏
          */}
          <div
            id='center-wrapper'
            className={`flex flex-col justify-between w-full relative z-10 min-h-screen ${isHomePage ? '' : 'mt-28'}`}>

            {/* 
              内容内边距容器
              响应式内边距：
              - 首页：px-0 无边距
              - 全宽模式：px-5 小边距
              - 普通模式：max-w-3xl 限制最大宽度，px-3 lg:px-0 响应式左右边距
            */}
            <div
              id='container-inner'
              className={`w-full justify-center mx-auto ${isHomePage ? 'px-0' : (fullWidth ? 'px-5' : 'max-w-3xl px-3 lg:px-0')}`}>
              {children} {/* 页面主要内容 - 由路由渲染的实际页面内容 */}
            </div>
          </div>

          {/* 
            右侧边栏 - 文章目录和元信息
            显示条件：
            1. 非全宽模式（!fullWidth）
            2. 非首页（!isHomePage）  
            3. 超大屏（2xl:block）
            
            固定宽度：w-72 (288px)
            固定定位：sticky top-0
            包含：文章目录（Catalog）
          */}
          {fullWidth || isHomePage ? null : (
            <div
              className={
                'w-72 hidden 2xl:block dark:border-transparent flex-shrink-0 relative z-10 mt-28'
              }>
              {/* 右侧边栏容器 */}
              <div className='py-14 sticky top-0'>
                {/* 
                  文章信息组件（已注释掉）
                  原计划显示当前文章或公告的元信息
                  可根据需要取消注释使用
                */}
                {/* <ArticleInfo post={props?.post ? props?.post : props.notice} /> */}

                <div>
                  {/* 桌面端文章目录 - 自动生成目录树 */}
                  <Catalog {...props} />
                </div>
              </div>
            </div>
          )}
        </main>

        {/* 返回顶部按钮 - 长页面滚动辅助 */}
        <JumpToTopButton />

        {/* 移动端导航抽屉 - 从左侧滑出的全屏导航菜单 */}
        <PageNavDrawer {...props} filteredNavPages={filteredNavPages} />

        {/* 移动端底部菜单栏 - 固定在屏幕底部的快速导航 */}
        <BottomMenuBar {...props} />
      </div>
    </ThemeGlobalGitbook.Provider>
  )
}

/**
 * 首页布局组件 - LayoutIndex
 * 
 * 专门用于渲染网站首页的布局组件。
 * 在 GitBook 主题中，首页通常展示文档的概览、最新文章或特定的欢迎页面。
 * 
 * 实现非常简单，直接渲染 Home 组件，该组件负责具体的首页内容展示。
 * Home 组件可能包含：
 * - 网站标题和描述
 * - 最新文章列表
 * - 文档分类导航
 * - 特色内容展示
 * 
 * @param {Object} props - 组件属性（虽然未使用，但符合 Next.js 布局约定）
 * @returns {JSX.Element} 返回 Home 组件的渲染结果
 */
const LayoutIndex = props => {
  return <Home />
}

/**
 * 文章详情页布局组件 - LayoutSlug
 * 
 * 专门用于渲染单篇文章或页面的详细内容的布局组件。
 * 负责文章页面的完整渲染，包括：
 * - SEO 优化（页面标题、meta 标签）
 * - 文章标题和图标显示
 * - Notion 内容渲染
 * - 文章导航（上一篇/下一篇）
 * - 移动端目录抽屉
 * - 404 页面处理
 * - 文章锁定状态处理
 * 
 * 布局特点：
 * - 简洁的单栏布局，专注于内容阅读
 * - 响应式标题字体大小
 * - 支持文章锁定功能（密码保护）
 * - 智能 404 检测和跳转
 * 
 * @param {Object} props - 组件属性对象
 * @param {Object} props.post - 当前文章对象，包含 Notion 页面数据
 * @param {Object} props.prev - 上一篇文章信息（用于导航）
 * @param {Object} props.next - 下一篇文章信息（用于导航）
 * @param {Object} props.siteInfo - 网站基本信息（标题、描述等）
 * @param {boolean} props.lock - 文章是否被锁定（密码保护）
 * @param {boolean} props.validPassword - 用户是否已输入正确密码
 * @returns {JSX.Element} 返回文章详情页的完整渲染
 */
const LayoutSlug = props => {
  // 从 props 解构文章相关数据
  const {
    post,           // 当前文章对象，包含 title、content、pageIcon 等属性
    prev,           // 上一篇文章信息，用于"上一篇"导航
    next,           // 下一篇文章信息，用于"下一篇"导航
    siteInfo,       // 网站基本信息对象，包含 title、description 等
    lock,           // 文章锁定状态，true 表示需要密码才能查看
    validPassword   // 密码验证状态，true 表示用户已输入正确密码
  } = props

  const router = useRouter() // Next.js 路由实例，用于获取当前路径信息

  // 提前调用所有 siteConfig 以确保 React hook 的调用顺序在每次渲染时都保持一致
  // 这是 React Hooks 的规则要求，所有 hook 必须在每次渲染中以相同顺序调用
  const index = siteConfig('GITBOOK_INDEX_PAGE', 'about', CONFIG) // 获取文档首页的 slug，用于特殊处理
  const postTitleIcon = siteConfig('POST_TITLE_ICON') // 是否显示文章标题前的图标配置
  const postDetailCategory = siteConfig('POST_DETAIL_CATEGORY') // 是否显示文章分类配置（当前未使用）
  const postDetailTag = siteConfig('POST_DETAIL_TAG') // 是否显示文章标签配置（当前未使用）

  // 动态生成页面标题
  // 如果当前页面是文档首页，标题格式为：文章标题 | 网站描述
  // 否则为：文章标题 | 网站标题
  const basePath = router.asPath.split('?')[0] // 获取不带查询参数的路径，避免 URL 参数影响判断
  const title =
    basePath?.indexOf(index) > 0
      ? `${post?.title} | ${siteInfo?.description}` // 文档首页的特殊标题格式
      : `${post?.title} | ${siteInfo?.title}` // 普通文章的标题格式

  // 404 页面检测和处理
  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000 // 获取 404 等待时间（秒转毫秒）

  useEffect(() => {
    // 如果 post 数据为空，可能是 404 页面或数据未加载完成
    if (!post) {
      // 延迟一段时间后检查，给数据加载留出时间
      setTimeout(() => {
        // 确保在浏览器环境中执行 DOM 查询
        if (isBrowser) {
          // 检查文章内容是否真的不存在
          const article = document.querySelector('#article-wrapper #notion-article')

          // 如果文章内容确实不存在，跳转到 404 页面
          if (!article) {
            router.push('/404').then(() => {
              console.warn('找不到页面', router.asPath) // 开发模式下输出警告信息
            })
          }
        }
      }, waiting404)
    }
  }, [post]) // 依赖 post 对象，当文章数据变化时重新检查

  return (
    <>
      {/* SEO 优化：设置页面标题 */}
      <Head>
        <title>{title}</title>
      </Head>

      {/* 文章锁定状态检查：只有未锁定或已验证密码时才显示内容 */}
      {!lock && (
        <div id='container'>
          {/* 文章标题区域 */}
          <h1 className='text-3xl pt-12 dark:text-gray-300'>
            {/* 条件渲染：根据配置决定是否显示标题前的图标 */}
            {postTitleIcon && (
              <NotionIcon icon={post?.pageIcon} /> // 显示 Notion 页面图标
            )}
            {post?.title} {/* 文章标题 */}
          </h1>

          {/* Notion 文章主体内容区域 */}
          {post && (
            <section className='px-1'>
              <div id='article-wrapper'>
                {/* 使用 NotionPage 组件渲染 Notion 内容块 */}
                <NotionPage post={post} />
              </div>

              {/* 
                文章导航：仅对文章类型（Post）显示上一篇/下一篇导航
                页面类型（Page）不显示导航
              */}
              {post?.type === 'Post' && (
                <ArticleAround prev={prev} next={next} />
              )}
            </section>
          )}

          {/* 移动端文章目录抽屉 - 从右侧滑出 */}
          <CatalogDrawerWrapper {...props} />
        </div>
      )}
    </>
  )
}

/**
 * 主题导出集合
 * 
 * 这些是 GitBook 主题对外暴露的核心 API，Next.js 会根据这些导出
 * 自动应用对应的布局到不同的页面类型。
 * 
 * 导出项说明：
 * - LayoutBase: 基础布局组件，是所有页面的基础框架
 * - LayoutIndex: 首页布局，渲染网站首页
 * - LayoutSlug: 文章详情布局，渲染单篇文章/页面
 * - Design: 设计系统展示组件，可能用于设计文档页面
 * - THEME_CONFIG: 主题配置对象，包含主题特有的配置项
 * 
 * 使用方式：
 * Next.js 会自动根据页面类型选择合适的布局组件进行渲染
 * 开发者无需手动导入使用，框架会自动处理
 */
export {
  LayoutBase,    // 基础布局 - 提供三栏式响应式布局结构
  LayoutIndex,   // 首页布局 - 渲染网站首页内容
  LayoutSlug,    // 文章布局 - 渲染单篇文章详情页
  Design,        // 设计组件 - 用于展示设计系统相关内容
  CONFIG as THEME_CONFIG  // 主题配置 - 导出给框架使用的主题配置
}
