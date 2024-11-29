import { PageTransition } from "@/components/transitions/page-transition"
import { PageLayout } from "@/components/layout/page-layout"

const teamMembers = [
  {
    name: "李大嵩",
    title: "召集人",
    role: "副校長",
    description: "負責工作小組整體方向規劃與決策"
  },
  {
    name: "陳永富",
    title: "召集人",
    role: "副校長",
    description: "負責工作小組整體方向規劃與決策"
  },
  {
    name: "陳永昇",
    title: "執行長",
    role: "教務長",
    description: "負責工作小組執行與協調"
  },
  {
    name: "黃育綸",
    title: "執行秘書",
    role: "副教務長",
    description: "負責工作小組日常運作與管理"
  },
  {
    name: "林孟洲",
    title: "技術總監",
    role: "教授",
    description: "帶領AI轉型技術組"
  }
]

const departments = [
  {
    name: "教務處",
    role: "行政統籌"
  },
  {
    name: "校務大數據中心",
    leader: "劉奕蘭",
    role: "數據分析"
  },
  {
    name: "圖書館",
    leader: "黃明居",
    role: "資源整合"
  },
  {
    name: "HERO中心",
    leader: "張永佳",
    role: "平台開發"
  },
  {
    name: "半導體國際策略合作辦公室",
    leader: "曾院介",
    role: "產業合作"
  }
]

export default function TeamPage() {
  return (
    <PageTransition>
      <PageLayout>
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">團隊成員</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            我們匯集了來自不同領域的專業人才，共同打造新世代的數位教學環境。
          </p>
        </section>

        {/* Core Team Members */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">核心成員</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">合作單位</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept) => (
              <div key={dept.name} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-2">{dept.name}</h3>
                {dept.leader && (
                  <p className="text-gray-600">主管：{dept.leader}</p>
                )}
                <p className="text-gray-600">負責：{dept.role}</p>
              </div>
            ))}
          </div>
        </section>
      </PageLayout>
    </PageTransition>
  )
}