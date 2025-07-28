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
      } else {
        ud_header?.classList?.remove('sticky')
      }
    }, throttleMs)
  )

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <div className='ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent'>
        <div className='container'>
          <div className='relative -mx-4 flex items-center justify-between'>
            {/* Logo */}
            <Logo {...props} />

            <div className='flex w-full items-center justify-between px-4'>
                {/* 右侧内容区 - 合并菜单和导航链接 */}
                <div className='flex items-center gap-8 justify-end pr-16 lg:pr-0'>
                  {/* 原中间菜单 */}
                  <MenuList {...props} customMenu={siteConfig('STARTER_MENU_LINKS')} />
                  
                  {/* 新导航链接 */}
                  <div className='flex items-center gap-6'>
                    {siteConfig('STARTER_NAV_LINKS', []).map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className={`${buttonTextColor} text-base font-medium hover:opacity-70`}>
                        {link.text}
                      </Link>
                    ))}
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
