// 'use client' // 声明这是一个客户端组件，是 Next.js 13+ App Router 的特性
import NotionIcon from '@/components/NotionIcon' // 导入 Notion 图标组件
import NotionPage from '@/components/NotionPage' // 导入 Notion 页面渲染组件
import { siteConfig } from '@/lib/config' // 导入网站配置
import { useGlobal } from '@/lib/global' // 导入全局状态钩子
import { isBrowser } from '@/lib/utils' // 导入判断是否在浏览器环境的工具函数
import { getShortId } from '@/lib/utils/pageId' // 导入获取页面短 ID 的工具函数
import dynamic from 'next/dynamic' // 导入 Next.js 的动态导入功能，用于代码分割
import Head from 'next/head' // 导入 Next.js 的 Head 组件，用于修改页面头部信息
import { useRouter } from 'next/router' // 导入 Next.js 的路由钩子
import { createContext, useContext, useEffect, useRef, useState } from 'react' // 导入 React 的核心钩子
import ArticleAround from './components/ArticleAround' // 导入“上一篇/下一篇”文章导航组件
import ArticleInfo from './components/ArticleInfo' // 导入文章信息组件
import BottomMenuBar from './components/BottomMenuBar' // 导入底部菜单栏组件（移动端）
import Catalog from './components/Catalog' // 导入文章目录组件
import CatalogDrawerWrapper from './components/CatalogDrawerWrapper' // 导入目录抽屉包装器
import Header from './components/Header' // 导入头部导航栏组件
import Home from './components/Home' // 导入首页组件
import JumpToTopButton from './components/JumpToTopButton' // 导入返回顶部按钮组件
import NavPostList from './components/NavPostList' // 导入导航文章列表组件
import PageNavDrawer from './components/PageNavDrawer' // 导入页面导航抽屉组件（移动端）
import CONFIG from './config' // 导入 GitBook 主题的特定配置
import { Style } from './style' // 导入主题的内联样式

// 使用 dynamic 动态导入 Algolia 搜索模态框，并禁用 SSR (ssr: false)
// 因为该组件可能依赖仅在浏览器中存在的 window 对象
const AlgoliaSearchModal = dynamic(
  () => import('@/components/AlgoliaSearchModal'),
  { ssr: false }
)

// 创建一个 React Context 用于在 GitBook 主题内部共享全局状态
const ThemeGlobalGitbook = createContext()
// 导出一个自定义钩子，方便子组件消费上面创建的 Context
export const useGitBookGlobal = () => useContext(ThemeGlobalGitbook)

/**
 * 基础布局组件
 * 采用左右两侧布局结构，在移动端则使用顶部和底部导航栏
 * @param {Object} props - 组件属性，包含 children, post, allNavPages 等
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  // 从 props 中解构出所需的数据
  const {
    children, // 子组件，即页面主要内容
    post, // 当前文章数据
    allNavPages, // 所有导航页面的数据
    latestPosts, // 最新文章数据
    slotLeft, // 左侧插槽
    slotRight, // 右侧插槽
    slotTop // 顶部插槽
  } = props
  const { fullWidth } = useGlobal() // 从全局状态获取 fullWidth，判断是否为全宽布局
  const router = useRouter() // 获取路由实例
  const [tocVisible, changeTocVisible] = useState(false) // 状态：目录是否可见（移动端）
  const [pageNavVisible, changePageNavVisible] = useState(false) // 状态：页面导航是否可见（移动端）
  const [filteredNavPages, setFilteredNavPages] = useState(allNavPages) // 状态：经过筛选（添加了 isLatest 标记）的导航页面

  const searchModal = useRef(null) // 创建一个 ref 用于引用搜索模态框组件

  // 当 allNavPages 变化时，更新 filteredNavPages
  useEffect(() => {
    setFilteredNavPages(allNavPages)
  }, [allNavPages])

  // 使用 Context.Provider 将共享的状态和方法传递给所有子组件
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
      <Style /> {/* 注入主题的 CSS 样式 */}

      <div
        id='theme-gitbook'
        className={`${siteConfig('FONT_STYLE')} pb-16 md:pb-0 scroll-smooth bg-white dark:bg-black w-full h-full min-h-screen justify-center dark:text-gray-300`}>
        {/* Algolia 搜索模态框 */}
        <AlgoliaSearchModal cRef={searchModal} {...props} />

        {/* 顶部导航栏 */}
        <Header {...props} />

        <main
          id='wrapper'
          className={`${siteConfig('LAYOUT_SIDEBAR_REVERSE') ? 'flex-row-reverse' : ''} relative flex justify-between w-full gap-x-6 h-full mx-auto max-w-screen-4xl`}>
          {/* 左侧边栏，仅在非全宽模式下且为桌面端时显示 */}
          {fullWidth ? null : (
            <div className={'hidden md:block relative z-10 '}>
              <div className='w-80 pt-14 pb-4 sticky top-0 h-screen flex justify-between flex-col'>
                {/* 导航部分 */}
                <div className='overflow-y-scroll scroll-hidden pt-10 pl-5'>
                  {/* 左侧插槽，用于插入自定义内容 */}
                  {slotLeft}

                  {/* 所有文章的导航列表 */}
                  <NavPostList filteredNavPages={filteredNavPages} {...props} />
                </div>
              </div>
            </div>
          )}

          {/* 中间内容区域 */}
          <div
            id='center-wrapper'
            className='flex flex-col justify-between w-full relative z-10 pt-14 min-h-screen'>
            <div
              id='container-inner'
              className={`w-full ${fullWidth ? 'px-5' : 'max-w-3xl px-3 lg:px-0'} justify-center mx-auto`}>
              {slotTop} {/* 顶部插槽 */}
              {children} {/* 页面主要内容 */}
            </div>
          </div>

          {/* 右侧边栏，仅在非全宽模式下且为大屏幕桌面端（2xl）时显示 */}
          {fullWidth ? null : (
            <div
              className={
                'w-72 hidden 2xl:block dark:border-transparent flex-shrink-0 relative z-10 '
              }>
              <div className='py-14 sticky top-0'>
                {/* 文章信息，显示当前文章或公告的信息 */}
                <ArticleInfo post={props?.post ? props?.post : props.notice} />

                <div>
                  {/* 桌面端文章目录 */}
                  <Catalog {...props} />
                </div>
              </div>
            </div>
          )}
        </main>

        {/* 返回顶部按钮 */}
        <JumpToTopButton />

        {/* 移动端导航抽屉（从左侧滑出） */}
        <PageNavDrawer {...props} filteredNavPages={filteredNavPages} />

        {/* 移动端底部菜单栏 */}
        <BottomMenuBar {...props} />
      </div>
    </ThemeGlobalGitbook.Provider>
  )
}

/**
 * 首页布局
 * @param {*} props
 * @returns {JSX.Element}
 */
const LayoutIndex = props => {
  return <Home />
}

/**
 * 文章详情页布局
 * @param {*} props
 * @returns {JSX.Element}
 */
const LayoutSlug = props => {
  const { post, prev, next, siteInfo, lock, validPassword } = props // 从 props 解构数据
  const router = useRouter()
  
  // 提前调用所有 siteConfig 以确保 React hook 的调用顺序在每次渲染时都保持一致
  const index = siteConfig('GITBOOK_INDEX_PAGE', 'about', CONFIG)
  const postTitleIcon = siteConfig('POST_TITLE_ICON')
  const postDetailCategory = siteConfig('POST_DETAIL_CATEGORY')
  const postDetailTag = siteConfig('POST_DETAIL_TAG')
  
  // 如果当前文章是文档的首页，则修改浏览器标签页的标题格式
  const basePath = router.asPath.split('?')[0] // 获取不带查询参数的路径
  const title =
    basePath?.indexOf(index) > 0
      ? `${post?.title} | ${siteInfo?.description}` // 首页格式
      : `${post?.title} | ${siteInfo?.title}` // 普通文章页格式

  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000 // 获取404等待时间配置
  // useEffect 用于处理文章不存在的情况
  useEffect(() => {
    // 如果 post 数据为空，则可能是 404 页面
    if (!post) {
      // 延迟一段时间后检查
      setTimeout(() => {
        if (isBrowser) {
          const article = document.querySelector(
            '#article-wrapper #notion-article'
          )
          // 如果文章内容依然不存在，则跳转到真正的 404 页面
          if (!article) {
            router.push('/404').then(() => {
              console.warn('找不到页面', router.asPath)
            })
          }
        }
      }, waiting404)
    }
  }, [post]) // 依赖于 post 对象

  return (
    <>
      <Head>
        <title>{title}</title> {/* 设置页面标题 */}
      </Head>

      {/* 如果文章未被锁定，则显示文章内容 */}
      {!lock && (
        <div id='container'>
          {/* 文章标题 */}
          <h1 className='text-3xl pt-12  dark:text-gray-300'>
            {postTitleIcon && ( // 是否显示标题前的图标
              <NotionIcon icon={post?.pageIcon} />
            )}
            {post?.title}
          </h1>

          {/* Notion 文章主体内容 */}
          {post && (
            <section className='px-1'>
              <div id='article-wrapper'>
                <NotionPage post={post} /> {/* 渲染 Notion 页面 */}
              </div>

              {/* 如果是文章类型（Post），则显示上一篇/下一篇文章的导航 */}
              {post?.type === 'Post' && (
                <ArticleAround prev={prev} next={next} />
              )}

            </section>
          )}

          {/* 文章目录抽屉（移动端） */}
          <CatalogDrawerWrapper {...props} />
        </div>
      )}
    </>
  )
}

/**
 * 404 页面布局
 * @param {*} props
 * @returns {JSX.Element}
 */
const Layout404 = props => {
  const router = useRouter()
  const { locale } = useGlobal() // 获取国际化语言文本
  // useEffect 用于一个回退机制
  useEffect(() => {
    // 延迟3秒后，如果页面上还是没有文章内容，则强制返回首页
    setTimeout(() => {
      const article = isBrowser && document.getElementById('article-wrapper')
      if (!article) {
        router.push('/').then(() => {
          // console.log('找不到页面', router.asPath)
        })
      }
    }, 3000)
  }, [])

  return (
    <>
      {/* 居中显示的 404 提示信息 */}
      <div className='md:-mt-20 text-black w-full h-screen text-center justify-center content-center items-center flex flex-col'>
        <div className='dark:text-gray-200'>
          <h2 className='inline-block border-r-2 border-gray-600 mr-2 px-3 py-2 align-top'>
            <i className='mr-2 fas fa-spinner animate-spin' /> {/* 一个旋转的加载图标 */}
            404
          </h2>
          <div className='inline-block text-left h-32 leading-10 items-center'>
            <h2 className='m-0 p-0'>{locale.NAV.PAGE_NOT_FOUND_REDIRECT}</h2> {/* 显示 "页面未找到" 的文本 */}
          </div>
        </div>
      </div>
    </>
  )
}


// 导出所有布局组件和主题配置
export {
  Layout404,
  LayoutBase,
  LayoutIndex,
  LayoutSlug,
  CONFIG as THEME_CONFIG
}
