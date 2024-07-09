'use client'
import { Briefcase } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useLanguage } from '@/context/languageProvider'

const dictionary = {
  en: {
    title: 'Latest Work',
    description: `Some of the recent projects I've worked on.`,
  },
  pt: {
    title: 'Projetos Recentes',
    description: `Alguns projetos que trabalhei recentemente.`,
  },
}

const customers = [
  {
    id: 1,
    title: 'Intermediações de Negócios',
    image: '/customers/dilson.jpeg',
  },
  {
    id: 2,
    title: 'Clínica Patricia Jacob',
    image: '/customers/clinica.jpeg',
  },
  {
    id: 3,
    title: 'Detail Club Garage',
    image: '/customers/detail.jpeg',
  },
  {
    id: 4,
    title: 'DFR Soluções Financeiras',
    image: '/customers/dfr.jpeg',
  },
]

export function Works() {
  const { language } = useLanguage()
  const texts = language === 'en' ? dictionary.en : dictionary.pt

  return (
    <div className="flex flex-col w-full mx-auto items-center">
      <div className="flex flex-col gap-2 max-w-[660px] w-full">
        <Briefcase size={22} />
        <h2 className="text-xl">{texts.title}</h2>
        <p className="text-zinc-400 text-sm">{texts.description}</p>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-[90%] max-sm:max-w-[75%] items-center mt-8"
      >
        <CarouselContent>
          {customers.map((customer, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-2/4 lg:basis-2/5 hover:cursor-grabbing select-none"
            >
              <Image
                src={customer.image}
                alt=""
                width={600}
                height={600}
                className="rounded-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
