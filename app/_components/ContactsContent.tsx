"use client"

import {useLanguage} from "@/app/_contexts/LanguageContext";

export default function ContactsContent({ data }: { data: any }) {
  const { language } = useLanguage()
  const content = data[language]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <p className="mb-4">{content.description}</p>
        <ul className="space-y-2">
          <li>
            <strong>{content.email}:</strong> {content.emailAddress}
          </li>
          <li>
            <strong>{content.phone}:</strong> {content.phoneNumber}
          </li>
          <li>
            <strong>{content.location}:</strong> {content.address}
          </li>
        </ul>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">{content.socialMedia}</h2>
          <div className="flex space-x-4">
            {content.socialLinks.map((link: any, index: number) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

