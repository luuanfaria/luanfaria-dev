'use client'
import { HandWaving } from '@phosphor-icons/react/dist/ssr'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { useLanguage } from '@/context/languageProvider'
import Link from 'next/link'

const dictionary = {
  en: {
    title: `Let's create something amazing?`,
    description: `Now that you've come this far, let's work together on your next project?`,
    button: 'Get in touch',
  },
  pt: {
    title: 'Vamos criar algo incrível?',
    description: `Agora que você chegou tão longe, vamos trabalhar juntos em seu próximo projeto?`,
    button: 'Entre em contato',
  },
}

export function Talk() {
  const { language } = useLanguage()
  const texts = language === 'en' ? dictionary.en : dictionary.pt

  return (
    <div className="flex flex-col w-full max-w-[660px] mx-auto items-center mt-8">
      <div className="flex flex-col w-full">
        <Card className="flex justify-between">
          <div className="flex flex-col">
            <CardHeader>
              {' '}
              <HandWaving size={22} />
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 text-xl items-center">
                <h2 className="text-xl">{texts.title}</h2>
              </div>
              <p className="text-sm text-zinc-600 mt-1">{texts.description}</p>
            </CardContent>
            <CardFooter>
              <Link href="mailto:hello@luandev.com.br" target="_blank">
                <Button variant="secondary">{texts.button}</Button>
              </Link>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  )
}
