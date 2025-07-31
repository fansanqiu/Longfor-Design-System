/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from 'next/router'

/**
 * 站点Logo组件
 * 包含图标和文字，支持滚动时文字颜色变化效果
 * @param {Object} props - 组件属性
 * @param {boolean} props.white - 是否使用白色主题
 * @param {Object} props.NOTION_CONFIG - Notion配置
 * @returns {JSX.Element} Logo组件
 */

export const Logo = () => {
  const router = useRouter()

  // 使用指定的logo文件
  const siteLogo = '/lfdesignlogo.svg'

  return (
    <div
      onClick={() => {
        router.push('/')
      }}
      className='flex items-center gap-[7px] cursor-pointer'>
      {/* logo */}
      {siteLogo && (
        <img
          src={siteLogo}
          alt='logo'
          className='header-logo mr-1 h-8 '
        />
      )}
      {/* 文字部分 */}
      <span
        className={`text-black [font-family:"Alibaba_PuHuiTi"] text-xl font-bold leading-[normal]`}>
        LF DESIGN
      </span>
    </div>
  )
}
