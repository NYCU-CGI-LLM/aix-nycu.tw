import { PageTransition } from "@/components/transitions/page-transition"
import { PageLayout } from "@/components/layout/page-layout"
import { notFound } from "next/navigation"

type Params = Promise<{ slug: string }>


const services = {
  "ai-assistant": {
    title: "AI助手",
    description: "24/7智能學習夥伴",
    features: [
      "即時回答學習問題",
      "個性化學習建議",
      "學習進度追蹤",
      "智能評估分析"
    ]
  },
  "ai-studio": {
    title: "AI Studio",
    description: "整合式內容製作平台",
    features: [
      "AI輔助教材製作",
      "多媒體內容整合",
      "互動教學設計",
      "即時預覽功能"
    ]
  },
  "virtual-lab": {
    title: "虛擬實驗室",
    description: "身歷其境的實驗體驗",
    features: [
      "高擬真實驗環境",
      "安全的操作空間",
      "即時數據分析",
      "協作實驗功能"
    ]
  },
  "voice": {
    title: "聲音合成",
    description: "自然流暢的AI語音",
    features: [
      "多語言支援",
      "情感語調調整",
      "即時語音生成",
      "個性化聲音定制"
    ]
  }
} as const

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services]
  
  if (!service) {
    notFound()
  }

  return (
    <PageTransition>
      <PageLayout>
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{service.description}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">主要功能</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature) => (
              <div key={feature} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </section>
      </PageLayout>
    </PageTransition>
  )
}