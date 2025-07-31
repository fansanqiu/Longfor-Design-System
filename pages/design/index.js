import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { LayoutDesign } from '@theme-components'

/**
 * 设计页面
 * @param {*} props
 * @returns
 */
export default function Design(props) {
  const { locale } = useGlobal()
  const router = useRouter()
  
  // 页面元数据
  const meta = {
    title: `${locale.NAV.DESIGN} | ${siteConfig('TITLE')}`,
    description: siteConfig('DESCRIPTION'),
    slug: 'design',
    image: siteConfig('HOME_BANNER_IMAGE'),
    type: 'website'
  }
  
  return (
    <LayoutDesign {...props} meta={meta}>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {locale.NAV.DESIGN}
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500 dark:text-gray-300">
            探索我们的设计系统和组件库
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">设计原则</h2>
            <p className="text-gray-600 dark:text-gray-300">
              了解我们的设计理念和原则，确保产品的一致性和用户体验。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">组件库</h2>
            <p className="text-gray-600 dark:text-gray-300">
              浏览我们的可复用组件，加速产品开发流程。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">设计资源</h2>
            <p className="text-gray-600 dark:text-gray-300">
              获取设计工具、模板和资源，提升设计效率。
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/components" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            查看组件库
          </a>
        </div>
      </div>
    </LayoutDesign>
  )
}

/**
 * 服务端获取数据
 * @param {*} param0
 * @returns
 */
export async function getStaticProps() {
  return {
    props: {
      // 这里可以添加从服务器获取的数据
      },
      revalidate: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5
  }
}