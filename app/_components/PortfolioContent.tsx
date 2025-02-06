"use client"

import {useLanguage} from "@/app/_contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import {formatText} from "@/app/_utils/formatText";

export default function PortfolioContent({ data }: { data: any }) {
  const { language } = useLanguage()
  const content = data[language]

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center gradient-text gradient-1">{content.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.projects.map((project: any, index: number) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="relative">
              <Image
                src={`/data/images/${project.image}`}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link href={`/project/${project.slug}`} className="text-white text-lg font-semibold hover:underline">
                  {content.viewProject}
                </Link>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 gradient-text gradient-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{formatText(project.description)}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}