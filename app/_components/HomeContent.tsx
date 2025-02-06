"use client"

import Image from "next/image"
import { useLanguage } from "../_contexts/LanguageContext"
import {formatText} from "@/app/_utils/formatText";
import { motion } from "framer-motion"

interface Skills {
  name: string,
  level: number,
}

export default function HomeContent({ data }: { data: any }) {
  const { language } = useLanguage()
  const content = data[language]

  const SkillLevel = ({ level }: { level: number }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`w-3 h-3 rounded-full ${i <= level ? "bg-indigo-600" : "bg-gray-300"}`}></div>
        ))}
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
      <div className="flex items-center mb-8">
        <Image
          src={`/data/images/${content.profileImage}`}
          alt={content.name}
          width={128}
          height={128}
          className="rounded-full mr-8"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">{content.name}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">{content.profession}</p>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">{language === "en" ? "Technical Stack" : "Технический стек"}</h3>
        <div className="flex flex-wrap gap-2">
          {content.techStack.map((tech: string, index: number) => (
            <motion.span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-sm font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="prose dark:prose-invert mb-8">{formatText(content.summary)}</div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">{language === "en" ? "Skills" : "Навыки"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.skills.map((skill: Skills, index: number) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm font-medium">{skill.name}</span>
              <SkillLevel level={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}