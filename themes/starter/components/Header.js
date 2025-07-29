/* eslint-disable no-unreachable */
import DashboardButton from '@/components/ui/dashboard/DashboardButton'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import throttle from 'lodash.throttle'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { Logo } from './Logo'
import { MenuList } from './MenuList'

/**
 * 顶部导航栏
 */
export const Header = props => {
  const router = useRouter()
  const { isDarkMode } = useGlobal()
  const [buttonTextColor, setColor] = useState(
    router.route === '/' ? 'text-white' : ''
  )

  const enableClerk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  useEffect(() => {
    if (isDarkMode || router.route === '/') {
      setColor('text-white')
    } else {
      setColor('')
    }
    // ======= Sticky
    window.addEventListener('scroll', navBarScollListener)
    return () => {
      window.removeEventListener('scroll', navBarScollListener)
    }
  }, [isDarkMode])

  // 滚动监听
  const throttleMs = 200
  const navBarScollListener = useCallback(
    throttle(() => {
      // eslint-disable-next-line camelcase
      const ud_header = document.querySelector('.ud-header')
      const scrollY = window.scrollY
      // 控制台输出当前滚动位置和 sticky 值
      if (scrollY > 0) {
        ud_header?.classList?.add('sticky')
        ud_header?.classList?.add('h-21') // 84px = 21 * 4
        // 滚动时将按钮颜色设为黑色
        setColor('text-black')
      } else {
        ud_header?.classList?.remove('sticky')
        ud_header?.classList?.remove('h-21')
        // 未滚动时恢复原始颜色
        if (isDarkMode || router.route === '/') {
          setColor('text-white')
        } else {
          setColor('')
        }
      }
    }, throttleMs)
  )

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <div className='ud-header h-21 absolute z-40 flex w-full items-center bg-transparent'>
        <div className='container'>
          <div className='relative flex items-center justify-between'>
            {/* 网站Logo - 点击跳转到首页 */}
            <Logo {...props} />

            <div className='flex w-fit px-4'>
              {/* 右侧内容区 - 合并菜单和导航链接 */}
              <div className='flex items-center gap-8 w-fit pr-16 lg:pr-0'>
                {/* 原中间菜单 */}
                <div className='lg:hidden w-fit'><MenuList {...props} customMenu={[{ href: '/design', name: '设计' }, { href: '/components', name: '组件' }, { href: '/resources', name: '资源' }, { href: '/mockup', name: 'Mock Up体验' }]} /></div>

                {/* 新导航链接 */}
                <div className='hidden lg:flex items-center gap-6'>
                  <Link href="/design" className={`${buttonTextColor} text-base font-medium hover:opacity-70`}>设计</Link>
                  <Link href="/components" className={`${buttonTextColor} text-base font-medium hover:opacity-70`}>组件</Link>
                  <Link href="/resources" className={`${buttonTextColor} text-base font-medium hover:opacity-70`}>资源</Link>
                  <Link href="/mockup" className={`${buttonTextColor} text-base font-medium hover:opacity-70`}>Mock Up体验</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Navbar Section End --> */}
    </>
  )
}
