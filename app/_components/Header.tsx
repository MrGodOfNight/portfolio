"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/app/_contexts/LanguageContext"

const Header = () => {
  const pathname = usePathname()
  const { language, toggleLanguage } = useLanguage()

  const navigation = [
    { name: language === "en" ? "Home" : "Главная", href: "/" },
    { name: language === "en" ? "Resume" : "Резюме", href: "/resume" },
    { name: language === "en" ? "Portfolio" : "Портфолио", href: "/portfolio" },
    { name: language === "en" ? "Contacts" : "Контакты", href: "/contacts" },
  ]

  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  pathname === item.href ? "text-yellow-300" : "text-white hover:text-yellow-200"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300"></span>
                )}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 text-sm font-medium text-purple-600 bg-white rounded-md hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-500 focus:ring-white transition-all duration-200 transform hover:scale-105"
          >
            {language === "en" ? "RU" : "EN"}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

