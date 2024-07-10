'use client'
import { useLanguage } from '@/context/languageProvider'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

import { Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr'

const dictionary = {
  en: {
    title: 'Building Websites for +6 Years.',
    title2: 'Enabling Success for Businesses Worldwide.',
    description:
      'I am Luan Faria, a Web Designer with over 6 years of experience crafting digital solutions that empower businesses globally. Specializing in user-centric design and strategic optimization. My commitment to excellence has earned me a reputation as a trusted partner in the online business community.',
    press: 'Press',
    pressText: 'anytime to get in touch.',
    placeholder: 'Type a command or search...',
    suggestions: 'Suggestions',
    email: 'Send email to hello@luandev.com.br',
    book: 'Book a Call',
    button: 'Get in touch',
  },
  pt: {
    title: 'Construindo Soluções Digitais há mais de 6 anos.',
    title2: 'Impulsionando Sucesso para Empresas ao Redor do Mundo.',
    description:
      'Eu sou Luan Faria, um Designer Web com mais de 6 anos de experiência desenvolvendo soluções digitais que capacitam negócios globalmente. Especializado em design centrado no usuário e otimização estratégica. Minha dedicação à excelência me rendeu uma reputação como um parceiro confiável na comunidade de negócios online.',
    press: 'Aperte',
    pressText: 'a qualquer momento para entrar em contato.',
    placeholder: 'Digite um comando ou pesquise...',
    suggestions: 'Sugestões',
    email: 'Envie email para hello@luandev.com.br',
    book: 'Agendar Bate-Papo',
    button: 'Entrar em contato',
  },
}

export function Hero() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const texts = language === 'en' ? dictionary.en : dictionary.pt

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="flex flex-col justify-between max-w-[660px] w-full mx-auto">
      <h1 className="text-3xl">{texts.title}</h1>
      <h1 className="text-3xl text-zinc-400">{texts.title2}</h1>
      <p className="text-base text-zinc-400 mt-4">{texts.description}</p>

      <p className="text-sm text-muted-foreground mt-4 md:block max-sm:hidden">
        {texts.press}{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{' '}
        {texts.pressText}
      </p>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={texts.placeholder} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem
              onSelect={() =>
                (window.location.href =
                  'https://calendar.app.google/VMaJYJ5fXEhGfxKA8')
              }
            >
              <Calendar className="mr-2 h-4 w-4" />
              <span>{texts.book}</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                (window.location.href = 'mailto:hello@luandev.com.br')
              }
            >
              <PaperPlaneTilt className="mr-2 h-4 w-4" />
              <span>{texts.email}</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>

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
