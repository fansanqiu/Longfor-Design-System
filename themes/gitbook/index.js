// 'use client' // 声明这是一个客户端组件，是 Next.js 13+ App Router 的特性
import NotionIcon from '@/components/NotionIcon' // 导入 Notion 图标组件
import NotionPage from '@/components/NotionPage' // 导入 Notion 页面渲染组件
import { siteConfig } from '@/lib/config' // 导入网站配置
import { useGlobal } from '@/lib/global' // 导入全局状态钩子
import { isBrowser } from '@/lib/utils' // 导入判断是否在浏览器环境的工具函数
import Head from 'next/head' // 导入 Next.js 的 Head 组件，用于修改页面头部信息
import { useRouter } from 'next/router' // 导入 Next.js 的路由钩子
import { createContext, useContext, useEffect, useRef, useState } from 'react' // 导入 React 的核心钩子
import ArticleAround from './components/ArticleAround' // 导入“上一篇/下一篇”文章导航组件
import ArticleInfo from './components/ArticleInfo' // 导入文章信息组件
import BottomMenuBar from './components/BottomMenuBar' // 导入底部菜单栏组件（移动端）
import Catalog from './components/Catalog' // 导入文章目录组件
import CatalogDrawerWrapper from './components/CatalogDrawerWrapper' // 导入目录抽屉包装器
import Design from './components/Design' // 导入Design组件
import Header from './components/Header' // 导入头部导航栏组件
import Home from './components/Home' // 导入首页组件
import JumpToTopButton from './components/JumpToTopButton' // 导入返回顶部按钮组件
import NavPostList from './components/NavPostList' // 导入导航文章列表组件
import PageNavDrawer from './components/PageNavDrawer' // 导入页面导航抽屉组件（移动端）
import CONFIG from './config' // 导入 GitBook 主题的特定配置
import { Style } from './style' // 导入主题的内联样式

// 创建一个 React Context 用于在 GitBook 主题内部共享全局状态
const ThemeGlobalGitbook = createContext()
// 导出一个自定义钩子，方便子组件消费上面创建的 Context
export const useGitBookGlobal = () => useContext(ThemeGlobalGitbook)

/**
 * 基础布局组件
 * 仅保留Header，其他内容移动到组件页面
 * @param {Object} props - 组件属性
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const {
    allNavPages = []
  } = props;
  
  const [tocVisible, changeTocVisible] = useState(false);
  const [pageNavVisible, changePageNavVisible] = useState(false);
  const [filteredNavPages, setFilteredNavPages] = useState(allNavPages);
  const searchModal = useRef(null);

  useEffect(() => {
    setFilteredNavPages(allNavPages);
  }, [allNavPages]);

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

        {/* 仅保留顶部导航栏 */}
        <Header {...props} />

        {/* 主要内容区域 - 仅渲染子组件 */}
        <main className="w-full">
          {props.children}
        </main>
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
    // 但是排除设计系统相关页面，这些页面不需要Notion文章数据
    const excludePaths = ['/design', '/components', '/resource', '/experience']
    const currentPath = router.asPath.split('?')[0]
    const shouldSkip404Check = excludePaths.some(path => currentPath.startsWith(path))
    
    if (!post && !shouldSkip404Check) {
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
  }, [post, router.asPath]) // 依赖于 post 对象和路由路径

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

// 导出所有布局组件和主题配置
export {
  LayoutBase,
  LayoutIndex,
  LayoutSlug,
  Design,
  CONFIG as THEME_CONFIG
}
