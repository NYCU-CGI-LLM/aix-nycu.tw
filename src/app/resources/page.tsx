import { PageTransition } from "@/components/transitions/page-transition"
import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"

const resources = {
  documentation: [
    {
      title: "AI助手使用指南",
      description: "完整的AI助手功能介紹與使用說明",
      type: "技術文件",
      link: "/docs/ai-assistant"
    },
    {
      title: "教材製作手冊",
      description: "使用AI Studio製作教材的詳細步驟",
      type: "使用手冊",
      link: "/docs/content-creation"
    },
    {
      title: "虛擬實驗室配置指南",
      description: "虛擬實驗環境的設置與管理說明",
      type: "技術文件",
      link: "/docs/virtual-lab"
    }
  ],
  tutorials: [
    {
      title: "新手入門教學",
      description: "數位教學平台基礎功能介紹",
      type: "影片教學",
      duration: "20分鐘"
    },
    {
      title: "AI課程設計工作坊",
      description: "運用AI工具優化課程設計",
      type: "工作坊",
      duration: "2小時"
    },
    {
      title: "數據分析實戰",
      description: "學習成效數據分析與應用",
      type: "線上課程",
      duration: "3小時"
    }
  ]
}

export default function ResourcesPage() {
  return (
    <PageTransition>
      <PageLayout>
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">資源中心</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            提供完整的使用指南、教學資源與技術支援，協助您充分運用我們的數位教學工具。
          </p>
        </section>

        {/* Documentation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">技術文件</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.documentation.map((doc) => (
              <Link 
                href={doc.link} 
                key={doc.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-blue-100 text-primary px-3 py-1 rounded-full">
                    {doc.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{doc.title}</h3>
                <p className="text-gray-600">{doc.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Tutorials */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">教學資源</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.tutorials.map((tutorial) => (
              <div key={tutorial.title} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-blue-100 text-primary px-3 py-1 rounded-full">
                    {tutorial.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    {tutorial.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{tutorial.title}</h3>
                <p className="text-gray-600">{tutorial.description}</p>
              </div>
            ))}
          </div>
        </section>
      </PageLayout>
    </PageTransition>
  )
}