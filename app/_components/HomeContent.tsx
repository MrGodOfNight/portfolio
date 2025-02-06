"use client"

import Image from "next/image"
import { useLanguage } from "../_contexts/LanguageContext"
import {formatText} from "@/app/_utils/formatText";

export default function HomeContent({ data }: { data: any }) {
  const { language } = useLanguage()
  const content = data[language]

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
      <div className="prose dark:prose-invert">{formatText(content.summary)}</div>
    </div>
  )
}
