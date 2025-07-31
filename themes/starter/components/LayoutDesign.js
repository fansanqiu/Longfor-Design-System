import { Header } from './Header'
import { Footer } from './Footer'

/**
 * 设计页面布局
 * @param {*} props
 * @returns
 */
export const LayoutDesign = props => {
  const { children, meta } = props
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航栏 */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      
      {/* 主要内容 */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* 页脚 */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}