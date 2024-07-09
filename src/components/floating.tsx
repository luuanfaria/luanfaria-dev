'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mailbox, Moon, Sun } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { useLanguage } from '@/context/languageProvider'

export function FloatingMenu() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { language, setLanguage } = useLanguage()

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark', !isDarkMode)
  }

  const handleLanguageChange = () => {
    setLanguage((prevState) => (prevState === 'en' ? 'pt' : 'en'))
  }

  return (
    <motion.div
      className="w-full fixed bottom-4 transform -translate-x-1/2 rounded-lg p-4 flex space-x-4 items-center justify-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-secondary transition-colors"
      >
        {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
      </button>

      <button
        onClick={handleLanguageChange}
        className="p-2 rounded-full bg-secondary transition-colors"
      >
        <span className="">{language.toUpperCase()}</span>
      </button>

      <Link
        href="mailto:hello@luandev.com.br"
        className="p-2 rounded-full bg-secondary transition-colors"
      >
        <Mailbox size={24} />
      </Link>
    </motion.div>
  )
}
