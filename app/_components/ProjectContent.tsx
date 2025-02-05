"use client"

import {useLanguage} from "@/app/_contexts/LanguageContext";
import Image from "next/image";

export default function ProjectContent({ data }: { data: any }) {
  const { language } = useLanguage()
  const content = data[language]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <Image
          src={`/data/images/${content.image}`}
          alt={content.title}
          width={800}
          height={600}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">{content.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {content.technologies.map((tech: string, index: number) => (
              <span key={index} className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          {content.video && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">
                {language === "en" ? "Project Demo" : "Демонстрация проекта"}
              </h2>
              <video controls className="w-full">
                <source src={`/data/images/${content.video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {content.screenshots && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">{language === "en" ? "Screenshots" : "Скриншоты"}</h2>
              <div className="grid grid-cols-2 gap-4">
                {content.screenshots.map((screenshot: string, index: number) => (
                  <Image
                    key={index}
                    src={`/data/images/${screenshot}`}
                    alt={`Screenshot ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}