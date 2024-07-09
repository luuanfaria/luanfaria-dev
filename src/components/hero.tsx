'use client'
import { useLanguage } from '@/context/languageProvider'
import { useEffect } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const dictionary = {
  en: {
    title: 'Building Websites for +6 Years.',
    title2: 'Enabling Success for Businesses Worldwide.',
    description:
      'I am Luan Faria, a Web Designer with over 6 years of experience crafting digital solutions that empower businesses globally. Specializing in user-centric design and strategic optimization. My commitment to excellence has earned me a reputation as a trusted partner in the online business community.',
    press: 'Press',
    pressText: 'anytime to get in touch.',
    button: 'Get in touch',
  },
  pt: {
    title: 'Construindo Soluções Digitais há mais de 6 anos.',
    title2: 'Impulsionando Sucesso para Empresas ao Redor do Mundo.',
    description:
      'Eu sou Luan Faria, um Designer Web com mais de 6 anos de experiência desenvolvendo soluções digitais que capacitam negócios globalmente. Especializado em design centrado no usuário e otimização estratégica. Minha dedicação à excelência me rendeu uma reputação como um parceiro confiável na comunidade de negócios online.',
    press: 'Aperte',
    pressText: 'a qualquer momento para entrar em contato.',
    button: 'Entrar em contato',
  },
}

export function Hero() {
  const { language } = useLanguage()
  const texts = language === 'en' ? dictionary.en : dictionary.pt

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 's' || event.key === 'S') {
        window.location.href = 'mailto:hello@luandev.com.br'
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <div className="flex flex-col justify-between max-w-[660px] w-full mx-auto">
      <h1 className="text-3xl">{texts.title}</h1>
      <h1 className="text-3xl text-zinc-400">{texts.title2}</h1>
      <p className="text-base text-zinc-400 mt-4">{texts.description}</p>

      <p className="mt-4 text-zinc-600 md:block max-sm:hidden">
        {texts.press}{' '}
        <span className="border border-zinc-400 rounded-md py-1 px-1.5 secondary text-zinc-300 text-sm">
          S
        </span>{' '}
        {texts.pressText}
      </p>

      <Link
        href="mailto:hello@luandev.com.br"
        target="_blank"
        className="block mt-4 md:hidden"
      >
        <Button variant="secondary">{texts.button}</Button>
      </Link>
    </div>
  )
}
