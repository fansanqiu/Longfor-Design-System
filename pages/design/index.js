
import LeftMenuBar from '@/themes/gitbook/components/LeftMenuBar'

export default function DesignPage() {
  return (
    <div className="flex">
      <LeftMenuBar />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold">设计原则</h1>
        <p>这里是设计原则的内容。</p>
      </div>
    </div>
  )
}
