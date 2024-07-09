import { Divisor } from '@/components/divisor'
import { FloatingMenu } from '@/components/floating'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Talk } from '@/components/talk'
import { Works } from '@/components/works'
import { LanguageProvider } from '@/context/languageProvider'

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex flex-col mx-auto py-12 font-sans gap-16 max-sm:px-6">
        <Header />
        <Hero />

        <Divisor />

        <Works />
        <Services />
        <FloatingMenu />
        <Talk />

        <Footer />
      </div>
    </LanguageProvider>
  )
}
