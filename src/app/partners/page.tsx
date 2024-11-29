import { PageTransition } from "@/components/transitions/page-transition"
import { PageLayout } from "@/components/layout/page-layout"

const partners = {
  academic: [
    {
      name: "普渡大學",
      description: "合作開發半導體線上課程",
      type: "國際合作",
    },
    {
      name: "資訊學院",
      description: "AI技術研發與支援",
      type: "校內合作",
    },
    {
      name: "醫學院",
      description: "醫學教育數位轉型",
      type: "校內合作",
    }
  ],
  industry: [
    {
      name: "台積電",
      description: "半導體人才培育計畫",
      type: "產業合作",
    },
    {
      name: "聯發科",
      description: "AI技術合作開發",
      type: "產業合作",
    },
    {
      name: "緯創",
      description: "數位學習平台開發",
      type: "產業合作",
    }
  ]
}

export default function PartnersPage() {
  return (
    <PageTransition>
      <PageLayout>
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">合作夥伴</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            攜手頂尖學府與產業界，共同打造創新的教育生態系。
          </p>
        </section>

        {/* Academic Partners */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">學術合作</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.academic.map((partner) => (
              <div key={partner.name} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">{partner.name}</h3>
                  <span className="text-sm bg-blue-100 text-primary px-3 py-1 rounded-full">
                    {partner.type}
                  </span>
                </div>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Partners */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">產業合作</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.industry.map((partner) => (
              <div key={partner.name} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">{partner.name}</h3>
                  <span className="text-sm bg-blue-100 text-primary px-3 py-1 rounded-full">
                    {partner.type}
                  </span>
                </div>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </section>
      </PageLayout>
    </PageTransition>
  )
}