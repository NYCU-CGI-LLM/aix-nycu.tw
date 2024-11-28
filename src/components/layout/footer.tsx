import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 組織資訊 */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">數位教學工作小組</h3>
            <p className="text-sm">國立陽明交通大學</p>
            <div className="text-sm space-y-2">
              <p>地址：300093 新竹市大學路1001號</p>
              <p>電話：03-571-2121</p>
            </div>
          </div>

          {/* 快速連結 */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">快速連結</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">關於我們</Link></li>
              <li><Link href="/services" className="hover:underline">核心服務</Link></li>
              <li><Link href="/resources" className="hover:underline">資源中心</Link></li>
              <li><Link href="/contact" className="hover:underline">聯絡我們</Link></li>
            </ul>
          </div>

          {/* 核心服務 */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">核心服務</h3>
            <ul className="space-y-2">
              <li><Link href="/services/ai-assistant" className="hover:underline">AI助手</Link></li>
              <li><Link href="/services/ai-studio" className="hover:underline">AI Studio</Link></li>
              <li><Link href="/services/virtual-lab" className="hover:underline">虛擬實驗室</Link></li>
              <li><Link href="/services/voice" className="hover:underline">聲音合成</Link></li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">追蹤我們</h3>
            <div className="flex space-x-4">
              {/* 這裡可以放社群媒體圖示 */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>© {new Date().getFullYear()} 國立陽明交通大學 數位教學工作小組. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}