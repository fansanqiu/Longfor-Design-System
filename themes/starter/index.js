/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

'use client'
import Loading from '@/components/Loading'
import NotionPage from '@/components/NotionPage'
import { siteConfig } from '@/lib/config'
import { isBrowser } from '@/lib/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { BackToTopButton } from './components/BackToTopButton'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import CONFIG from './config'
import { Style } from './style'
// import { MadeWithButton } from './components/MadeWithButton'
import Comment from '@/components/Comment'
import replaceSearchResult from '@/components/Mark'
import ShareBar from '@/components/ShareBar'
import { useGlobal } from '@/lib/global'
import { loadWowJS } from '@/lib/plugins/wow'
import Link from 'next/link'
import { ArticleLock } from './components/ArticleLock'
import { Banner } from './components/Banner'
import SearchInput from './components/SearchInput'
import { SVG404 } from './components/svg/SVG404'
import { Home } from './components/Home'
import { Design } from './components/Design'
import { LayoutDesign as CustomLayoutDesign } from './components/LayoutDesign'

/**
 * 布局框架
 * Landing-2 主题用作产品落地页展示
 * 结合Stripe或者lemonsqueezy插件可以成为saas支付订阅
 * https://play-tailwind.tailgrids.com/
 * @param {*} props
 * @returns
 */
const LayoutBase = props => {
  const { children } = props
  // 极简模式，会隐藏掉页头页脚等组件，便于嵌入网页等功能 
  const { isLiteMode } = useGlobal()
  const router = useRouter()

  // 加载wow动画
  useEffect(() => {
    loadWowJS()
  }, [])

  // 特殊简化布局，如果识别到路由中有 ?lite=true，则给网页添加一些自定义的css样式，例如背景改成黑色
  useEffect(() => {
    const isLiteMode = router.query.lite === 'true'
    console.log(router.query.lite, isLiteMode)
    if (isLiteMode) {
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    }
  }, [])

  return (
    <div
      id='theme-starter'
      className={`${siteConfig('FONT_STYLE')} min-h-screen flex flex-col scroll-smooth`}>
      <Style />

      {/* 页头 */}
      {isLiteMode ? <></> : <Header {...props} />}

      <div id='main-wrapper' className='grow'>
        {children}
      </div>

      {/* 页脚 */}

      {isLiteMode ? <></> : <Footer {...props} />}

      {/* 悬浮按钮 */}
      {isLiteMode ? <></> : <BackToTopButton />}

      {/* <MadeWithButton/> */}
    </div>
  )
}

/**
 * 首页布局
 * @param {*} props
 * @returns
 */
const LayoutIndex = props => {
  const count = siteConfig('STARTER_BLOG_COUNT', 3, CONFIG)
  const { locale } = useGlobal()
  const posts = props?.allNavPages ? props.allNavPages.slice(0, count) : []

  return (
    <>
      <Home />
    </>
  )
}


/**
 * 文章详情页布局
 * @param {*} props
 * @returns
 */
const LayoutSlug = props => {
  const { post, lock, validPassword } = props

  // 如果 是 /article/[slug] 的文章路径则視情況进行重定向到另一个域名
  const router = useRouter()
  if (
    !post &&
    siteConfig('STARTER_POST_REDIRECT_ENABLE') &&
    isBrowser &&
    router.route === '/[prefix]/[slug]'
  ) {
    const redirectUrl =
      siteConfig('STARTER_POST_REDIRECT_URL') +
      router.asPath.replace('?theme=landing', '')
    router.push(redirectUrl)
    return (
      <div id='theme-starter'>
        <Loading />
      </div>
    )
  }

  return (
    <>
      <Banner title={post?.title} description={post?.summary} />
      <div className='container grow'>
        <div className='flex flex-wrap justify-center -mx-4'>
          <div id='container-inner' className='w-full p-4'>
            {lock && <ArticleLock validPassword={validPassword} />}

            {!lock && post && (
              <div id='article-wrapper' className='mx-auto'>
                <NotionPage {...props} />
                <Comment frontMatter={post} />
                <ShareBar post={post} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}


/**
 * 404页面
 * @param {*} props
 * @returns
 */
const Layout404 = props => {
  return (
    <>
      {/* <!-- ====== 404 Section Start --> */}
      <section className='bg-white py-20 dark:bg-dark-2 lg:py-[110px]'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap items-center -mx-4'>
            <div className='w-full px-4 md:w-5/12 lg:w-6/12'>
              <div className='text-center'>
                <img
                  src='/images/starter/404.svg'
                  alt='image'
                  className='max-w-full mx-auto'
                />
              </div>
            </div>
            <div className='w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12'>
              <div>
                <div className='mb-8'>
                  <SVG404 />
                </div>
                <h3 className='mb-5 text-2xl font-semibold text-dark dark:text-white'>
                  {siteConfig('STARTER_404_TITLE')}
                </h3>
                <p className='mb-8 text-base text-body-color dark:text-dark-6'>
                  {siteConfig('STARTER_404_TEXT')}
                </p>
                <Link
                  href='/'
                  className='py-3 text-base font-medium text-white transition rounded-md bg-dark px-7 hover:bg-primary'>
                  {siteConfig('STARTER_404_BACK')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== 404 Section End --> */}
    </>
  )
}

/**
 * 设计页面布局
 * @param {*} props
 * @returns
 */
const LayoutDesign = props => {
  return <CustomLayoutDesign {...props} />
}

export {
  Layout404,
  LayoutBase,
  LayoutDesign,
  LayoutIndex,
  LayoutSlug,
  CONFIG as THEME_CONFIG
}
