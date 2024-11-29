'use client'

import { PageTransition } from "@/components/transitions/page-transition"
import { PageLayout } from "@/components/layout/page-layout"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <PageTransition>
      <PageLayout>
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">聯絡我們</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            如有任何問題或建議，歡迎與我們聯繫。
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-6">聯絡資訊</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">地址</h3>
                <p className="text-gray-600">300093 新竹市大學路1001號</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">電話</h3>
                <p className="text-gray-600">03-571-2121</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">contact@nycu.edu.tw</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">辦公時間</h3>
                <p className="text-gray-600">週一至週五 9:00-17:00</p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-bold mb-6">聯絡表單</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">姓名</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block font-medium mb-2">主旨</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-2">訊息內容</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-3 border rounded-lg h-32"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
              >
                送出
              </button>
            </form>
          </section>
        </div>
      </PageLayout>
    </PageTransition>
  )
}