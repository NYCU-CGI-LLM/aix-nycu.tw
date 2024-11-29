import { PageTransition } from "@/components/transitions/page-transition"
import { PageLayout } from "@/components/layout/page-layout"
import Link from "next/link"

const services = [
  {
    title: "AI助手",
    description: "智能學習助手，為師生提供24/7的即時支援",
    href: "/services/ai-assistant",
    icon: "🤖"
  },
  {
    title: "AI Studio",
    description: "整合式AI教學內容製作平台",
    href: "/services/ai-studio",
    icon: "🎨"
  },
  {
    title: "虛擬實驗室",
    description: "沉浸式實驗學習環境",
    href: "/services/virtual-lab",
    icon: "🔬"
  },
  {
    title: "聲音合成",
    description: "自然流暢的AI語音教學系統",
    href: "/services/voice",
    icon: "🎤"
  }
]

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageLayout>
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">核心服務</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            我們提供全方位的AI教學解決方案，協助教師提升教學效率，為學生創造最佳學習體驗。
          </p>
        </section>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title} 
              href={service.href}
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary/80">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4 text-primary font-medium group-hover:translate-x-2 transition-transform">
                了解更多 →
              </div>
            </Link>
          ))}
        </div>
      </PageLayout>
    </PageTransition>
  )
}