export function FeaturedPrograms() {
    const programs = [
      {
        title: "半導體學程",
        description: "涵蓋半導體基礎知識、先進技術及應用的全面課程",
        icon: "🔧"
      },
      {
        title: "醫學教學",
        description: "針對醫學專業學生的課程，包括解剖學、病理學及臨床實踐",
        icon: "🏥"
      },
      {
        title: "AI延伸教育",
        description: "涵蓋機器學習、深度學習、生成式AI及其在各行各業的應用",
        icon: "🤖"
      }
    ]
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">特色學程</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }