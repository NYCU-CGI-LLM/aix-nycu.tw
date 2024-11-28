export function Hero() {
    return (
      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              運用AI創新
              <span className="block mt-2">打造未來教育</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              結合實體學校和數位學習的優點，利用生成式AI來設計教學標準流程及課程準備
            </p>
  
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
                了解更多
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition">
                聯絡我們
              </button>
            </div>
          </div>
  
          {/* 特色數據 */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-primary">3+</div>
              <div className="mt-2 text-gray-600">高價值學程</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="mt-2 text-gray-600">AI輔助教學</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="mt-2 text-gray-600">學習支援</div>
            </div>
          </div>
        </div>
      </section>
    )
  }