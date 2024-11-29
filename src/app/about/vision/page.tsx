import { PageTransition } from "@/components/transitions/page-transition"
import { PageLayout } from "@/components/layout/page-layout"

const goals = [
  {
    title: "創新教學模式",
    description: "運用AI技術重新定義教學方式，打造更有效率、更具互動性的學習環境。",
    target: "2024年完成三大高價值學程的數位轉型"
  },
  {
    title: "提升學習效果",
    description: "透過個性化學習建議和即時反饋，幫助學生達到最佳學習成效。",
    target: "預期學生學習成效提升30%"
  },
  {
    title: "擴展教育影響力",
    description: "建立可擴展的數位教學模式，擴大優質教育的觸及範圍。",
    target: "課程內容支援多國語言，接軌國際教育"
  }
]

const strategies = [
  {
    title: "AI技術整合",
    points: [
      "發展專屬AI語言模型",
      "建立RAG知識架構",
      "開發教學輔助工具",
      "優化使用者體驗"
    ]
  },
  {
    title: "資源整合運用",
    points: [
      "跨部門協作機制",
      "教學資源數位化",
      "知識庫建立維護",
      "持續效能評估"
    ]
  },
  {
    title: "人才培育發展",
    points: [
      "教師培訓計畫",
      "技術團隊建設",
      "國際人才交流",
      "產學合作推動"
    ]
  }
]

export default function VisionPage() {
  return (
    <PageTransition>
      <PageLayout>
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">願景與目標</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            我們致力於運用AI技術創新教育模式，為師生打造更優質的教與學體驗。
          </p>
        </section>

        {/* Goals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">核心目標</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal) => (
              <div key={goal.title} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-3">{goal.title}</h3>
                <p className="text-gray-600 mb-4">{goal.description}</p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-primary font-medium">目標：{goal.target}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategies Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">實施策略</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {strategies.map((strategy) => (
              <div key={strategy.title} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">{strategy.title}</h3>
                <ul className="space-y-2">
                  {strategy.points.map((point) => (
                    <li key={point} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </PageLayout>
    </PageTransition>
  )
}