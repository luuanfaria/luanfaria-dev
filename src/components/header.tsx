'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useLanguage } from '@/context/languageProvider'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

const dictionary = {
  en: {
    description: 'Web Developer, Explorer, Coffee Lover.',
    available: 'Available for Work',
  },
  pt: {
    description: 'Desenvolvedor Web, Explorador, Amante de café.',
    available: 'Disponível para Trabalho',
  },
}

export function Header() {
  const { language } = useLanguage()
  const texts = language === 'en' ? dictionary.en : dictionary.pt

  return (
    <header className="flex max-md:flex-col gap-2 justify-between max-w-[660px] w-full mx-auto items-center">
      <div className="flex items-center gap-2 max-md:w-full">
        <Avatar>
          <AvatarImage src="https://github.com/luuanfaria.png" />
          <AvatarFallback>LF</AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-start">
          <span className="text-black dark:text-white font-medium text-base">
            Luan Faria
          </span>
          <span className="text-black/70 dark:text-zinc-400 font-light text-xs">
            {texts.description}
          </span>
        </div>
      </div>

      <div className="flex max-md:justify-between max-md:mt-4 max-md:w-full gap-2 items-center">
        <div className="flex flex-row gap-2 items-center md:border-r-2 pr-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>

          <span className="font-sans font-normal text-base text-green-500">
            {texts.available}
          </span>
        </div>

        <div className="flex gap-2">
          <Link href="https://linkedin.com/in/luuanfaria" target="_blank">
            <LinkedinLogo size={22} />
          </Link>
          <Link href="https://github.com/luuanfaria" target="_blank">
            <GithubLogo size={22} />
          </Link>
        </div>
      </div>
    </header>
  )
}
