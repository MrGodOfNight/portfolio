"use client"

import { useLanguage } from "@/app/_contexts/LanguageContext"

export default function ResumeContent({ data }: { data: any }) {
  const { language } = useLanguage()
  const content = data[language]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{content.experience.title}</h2>
        {content.experience.items.map((item: any, index: number) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-medium">{item.position}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {item.company} | {item.period}
            </p>
            <ul className="list-disc list-inside mt-2">
              {item.responsibilities.map((resp: string, idx: number) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">{content.education.title}</h2>
        {content.education.items.map((item: any, index: number) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-medium">{item.degree}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {item.institution} | {item.period}
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}

