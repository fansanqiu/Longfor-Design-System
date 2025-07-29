/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import throttle from 'lodash.throttle'
import { useEffect, useState } from 'react'

/**
 * 站点Logo组件
 * 包含图标和文字，支持滚动时文字颜色变化效果
 * @param {Object} props - 组件属性
 * @param {boolean} props.white - 是否使用白色主题
 * @param {Object} props.NOTION_CONFIG - Notion配置
 * @returns {JSX.Element} Logo组件
 */

export const Logo = ({ white, NOTION_CONFIG }) => {
  const router = useRouter()
  
  // 默认使用public目录下的favicon.ico作为站点图标
  const siteLogo = '/favicon.ico'
  
  // Logo文字颜色状态：滚动前为白色，滚动后为黑色
  const [logoTextColor, setLogoTextColor] = useState('text-white')

  // 监听滚动事件，实现滚动时文字颜色变化效果
  useEffect(() => {
    // 使用节流函数优化滚动性能，每200ms最多执行一次
    const handleScroll = throttle(() => {
      // 判断滚动位置，设置对应的文字颜色
      const newTextColor = window.scrollY > 0 ? 'text-black' : 'text-white'
      setLogoTextColor(newTextColor)
    }, 200)

    // 添加滚动事件监听器
    window.addEventListener('scroll', handleScroll)
    
    // 组件卸载时移除事件监听器
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='w-60 max-w-full px-4'>
      <div className='navbar-logo flex items-center w-full py-5 cursor-pointer'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {siteLogo && (
          <LazyImage
            priority
            onClick={() => {
              router.push('/')
            }}
            src={siteLogo}
            alt='logo'
            className='header-logo mr-1 h-8 '
          />
        )}
        {/* Logo文字部分 - 点击可跳转到首页 */}
        <span
          onClick={() => {
            router.push('/')
          }}
          className={`${logoTextColor} logo dark:text-white py-1.5 header-logo-text whitespace-nowrap text-2xl font-semibold`}>
          {siteConfig('TITLE')}
        </span>
      </div>
    </div>
  )
}
