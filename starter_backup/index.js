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
import { Header } from './components/Header'
import CONFIG from './config'
import { Style } from './style'
import { useGlobal } from '@/lib/global'
import { loadWowJS } from '@/lib/plugins/wow'
import { Home } from './components/Home'
import { Design } from './components/Design'

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
      {/* 悬浮按钮 */}
      {isLiteMode ? <></> : <BackToTopButton />}
    </div>
  )
}

/**
 * 首页布局
 * @param {*} props
 * @returns
 */
const LayoutIndex = props => {
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
      {/* <Banner title={post?.title} description={post?.summary} /> */}
      <div className='container grow'>
        <div className='flex flex-wrap justify-center -mx-4'>
          <div id='container-inner' className='w-full p-4'>
            {/* {lock && <ArticleLock validPassword={validPassword} />} */}

            {/* {!lock && post && (
              <div id='article-wrapper' className='mx-auto'>
                <NotionPage {...props} />
                <Comment frontMatter={post} />
                <ShareBar post={post} />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  )
}

/**
 * 设计页面布局
 * @param {*} props
 * @returns
 */
const LayoutDesign = props => {
  return (
    <>
      <Design />
    </>
  )
}

export {

  LayoutBase,
  LayoutDesign,
  LayoutIndex,
  LayoutSlug,
  CONFIG as THEME_CONFIG
}
