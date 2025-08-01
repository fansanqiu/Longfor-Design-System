// 禁用 eslint 的 no-unreachable 规则，因为文件中可能存在不可达代码
/* eslint-disable no-unreachable */
import Link from 'next/link'
// 导入 Next.js 的 useRouter 钩子，用于访问路由信息
import { useRouter } from 'next/router'
// 导入本地 Logo 组件
import { Logo } from './Logo'

/**
 * 顶部导航栏
 */
export const Header = props => {
  // 使用 useRouter 钩子获取当前路由信息
  const router = useRouter()

  // 返回 JSX 元素
  return (
    <>
      {/* 导航栏 */}
      <div className='flex flex-col justify-center items-center gap-1 p-10 bg-transparent'>
        <div className='flex h-16 items-center gap-7 border [background:linear-gradient(95deg,rgba(235,237,240,0.85)_9.65%,rgba(233,236,238,0.81)_58.96%,rgba(254,254,255,0.87)_86.15%)] shadow-[0_20px_30px_0_rgba(77,90,108,0.12)] backdrop-blur-[7.5px] px-10 py-[9px] rounded-[100px] border-solid border-white w-fit'>
          {/* logo */}
          <Logo />
          {/* 其它页面 */}
          <div className='flex items-center gap-5'>
            <Link href="/design" className={` text-[color:var(--Grey04,#6F6F6F)] text-center [font-family:"PingFang_SC"] text-sm font-normal leading-[22px] hover:text-[#165DFF] hover:opacity-100 hover:font-semibold`}>设计</Link>

            <Link href="/components" className={` text-[color:var(--Grey04,#6F6F6F)] text-center [font-family:"PingFang_SC"] text-sm font-normal leading-[22px] hover:text-[#165DFF] hover:opacity-100 hover:font-semibold`}>组件</Link>

            <Link href="/resources" className={` text-[color:var(--Grey04,#6F6F6F)] text-center [font-family:"PingFang_SC"] text-sm font-normal leading-[22px] hover:text-[#165DFF] hover:opacity-100 hover:font-semibold`}>资源</Link>

            <Link href="/mockup" className={` text-[color:var(--Grey04,#6F6F6F)] text-center [font-family:"PingFang_SC"] text-sm font-normal leading-[22px] hover:text-[#165DFF] hover:opacity-100 hover:font-semibold`}>体验</Link>
          </div>
        </div>
      </div>
    </>
  )
}
