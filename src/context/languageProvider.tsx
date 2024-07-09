'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'pt'

interface LanguageContextType {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<Language>>
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
