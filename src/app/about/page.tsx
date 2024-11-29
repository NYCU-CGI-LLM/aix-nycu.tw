import { PageTransition } from "@/components/transitions/page-transition"
import { PageLayout } from "@/components/layout/page-layout"

export default function AboutPage() {
  return (
    <PageTransition>
      <PageLayout>
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">關於我們</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            陽明交通大學數位教學工作小組致力於運用最新AI技術，提升教學品質與學習效果，打造未來教育的新典範。
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">我們的使命</h2>
            <p className="text-gray-600">
              透過AI技術創新教學模式，提供教師更有效的教學工具，為學生創造更優質的學習體驗。
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">未來願景</h2>
            <p className="text-gray-600">
              打造全方位的數位學習環境，結合實體與線上優勢，成為教育科技的領導者。
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">核心價值</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "創新",
                description: "持續探索AI技術在教育領域的創新應用"
              },
              {
                title: "品質",
                description: "確保每個教學工具和資源的高品質"
              },
              {
                title: "合作",
                description: "促進教師、學生與技術之間的緊密合作"
              }
            ].map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </PageLayout>
    </PageTransition>
  )
}