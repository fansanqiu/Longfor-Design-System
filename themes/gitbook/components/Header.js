// 禁用 eslint 的 no-unreachable 规则，因为文件中可能存在不可达代码
/* eslint-disable no-unreachable */
import Link from 'next/link'
// 导入 Next.js 的 useRouter 钩子，用于访问路由信息
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

/**
 * 顶部导航栏
 */
const Header = props => {
  // 使用 useRouter 钩子获取当前路由信息
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          
          if (currentScrollY > 40) {
            // 向下滚动超过200px，隐藏导航栏
            if (currentScrollY > lastScrollY) {
              setIsVisible(false)
            }
            // 向上滚动超过40px，显示导航栏
            else if (lastScrollY - currentScrollY > 40) {
              setIsVisible(true)
            }
          } else {
            // 在顶部200px内始终显示
            setIsVisible(true)
          }
          
          setLastScrollY(currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  // 返回 JSX 元素
  return (
    <>
      {/* 导航栏 */}
      <div className={`fixed top-0 left-0 right-0 flex flex-col justify-center items-center gap-1 p-10 bg-transparent z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='flex h-16 items-center gap-7 border [background:linear-gradient(95deg,rgba(235,237,240,0.85)_9.65%,rgba(233,236,238,0.81)_58.96%,rgba(254,254,255,0.87)_86.15%)] shadow-[0_20px_30px_0_rgba(77,90,108,0.12)] backdrop-blur-[7.5px] px-10 py-[9px] rounded-[100px] border-solid border-white w-fit'>
          {/* logo */}
          <div
            onClick={() => {
              router.push('/')
            }}
            className='flex items-center gap-[7px] cursor-pointer'>
            {/* logo */}
            <img
              src='/lfdesignlogo.svg'
              alt='logo'
              className='header-logo mr-1 h-8'
            />
            {/* 文字部分 */}
            <span
              className={`text-black [font-family:"Alibaba_PuHuiTi"] text-xl font-bold leading-[normal]`}>
              LF DESIGN
            </span>
          </div>

          {/* 其它页面 */}
          <div className='flex items-center gap-5'>
            <Link href="/design" legacyBehavior>
              <a className={`text-[color:var(--Grey04,#6F6F6F)] text-center [font-family:"PingFang_SC"] text-sm font-normal leading-[22px] hover:text-[#165DFF] hover:opacity-100 hover:font-semibold`} onClick={(e) => {
                e.preventDefault();
                // 获取第一篇文章的链接并跳转
                if (typeof window !== 'undefined') {
                  const firstPostLink = document.querySelector('#posts-wrapper .ml-3 a[href], #posts-wrapper .ml-3 a');
                  if (firstPostLink && firstPostLink.href) {
                    window.location.href = firstPostLink.href;
                  } else {
                    // 如果没有找到文章链接，跳转到/design页面
                    router.push('/design');
                  }
                }
              }}>设计</a>
            </Link>

            <Link href="/" legacyBehavior>
              <a className={`text-[color:var(--Grey04,#6F6F6F)] text-center [font-family:"PingFang_SC"] text-sm font-normal leading-[22px] hover:text-[#165DFF] hover:opacity-100 hover:font-semibold`}>组件</a>
            </Link>

            <Link href="/" legacyBehavior>
              <a className={`text-[color:var(--Grey04,#6F6F6F)] text-center [font-family:"PingFang_SC"] text-sm font-normal leading-[22px] hover:text-[#165DFF] hover:opacity-100 hover:font-semibold`}>资源</a>
            </Link>

            <Link href="/" legacyBehavior>
              <a className={`text-[color:var(--Grey04,#6F6F6F)] text-center [font-family:"PingFang_SC"] text-sm font-normal leading-[22px] hover:text-[#165DFF] hover:opacity-100 hover:font-semibold`}>体验</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header