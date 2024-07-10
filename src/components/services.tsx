'use client'
import {
  Browser,
  Code,
  CodeBlock,
  DeviceMobile,
  Globe,
  Lightbulb,
  Wrench,
} from '@phosphor-icons/react/dist/ssr'
import { Card, CardContent, CardHeader } from './ui/card'
import { useLanguage } from '@/context/languageProvider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const dictionary = {
  en: {
    title: 'Services I offer',
    description: `Let's work together on your next amazing project.`,
    byDemand: 'By Demand',
    daas: 'Developer as a Service',
    services: [
      {
        title: 'Website Landing Page',
        category: 'byDemand',
        price: 'From $799',
        description:
          'How about a personalized page focused on lead conversions and information? A landing page is ideal for this purpose, impacting your clients with concise information and clear calls to action.',
        icon: <Browser size={22} />,
      },
      {
        title: 'Full Website',
        category: 'byDemand',
        price: 'From $1.599',
        description:
          'Need a website that includes every detail about your business? A full website can include all the information and services your company offers.',
        icon: <Globe size={22} />,
      },
      {
        title: 'Web App',
        category: 'byDemand',
        price: 'From R$2.000',
        description:
          'Looking for a customized solution for your business? Want to automate a process in your company or whatever your need may be, we can help.',
        icon: <Lightbulb size={22} />,
      },
      {
        title: 'Mobile App',
        category: 'byDemand',
        price: 'From $3.000',
        description:
          'Build customer loyalty with a custom on-demand app tailored to your needs. Our apps are developed and customized for both Android and Apple devices.',
        icon: <DeviceMobile size={22} />,
      },
      {
        title: 'FullStack Software Engineer',
        category: 'daas',
        price: '$37/hour',
        description:
          'Looking for an experienced fullstack developer with a proven track record in multidisciplinary teams? I have 6 years of experience working with React, Next.js, Node.js, React Native, and Solidity.',
        icon: <Code size={22} />,
      },
      {
        title: 'Web Maintenance',
        category: 'daas',
        price: '$37/hour',
        description:
          'Does your website need maintenance? If you already have a website or system that you want to keep updated, we offer support and maintenance services for websites.',
        icon: <Wrench size={22} />,
      },
    ],
  },
  pt: {
    title: 'Serviços Prestados',
    description: `Vamos trabalhar juntos em seu próximo projeto.`,
    byDemand: 'Por Demanda',
    daas: 'Desenvolvedor como Serviço',
    services: [
      {
        title: 'Landing Page',
        category: 'byDemand',
        price: 'A partir de R$2.000',
        description:
          'Que tal uma página personalizada focada em conversões de leads e informativa? Uma landing page é ideal para esse caso, impacte seus clientes com informações curtas e ações claras.',
        icon: <Browser size={22} />,
      },
      {
        title: 'Website Completo',
        category: 'byDemand',
        price: 'A partir de R$4.000',
        description:
          'Precisa de um site com todos os mínimos detalhes da sua empresa? Um site completo é possível incluir todos as informações e serviços da sua empresa.',
        icon: <Globe size={22} />,
      },
      {
        title: 'Web App',
        category: 'byDemand',
        price: 'A partir de R$5.000',
        description:
          'Busca uma solução personalizada para seu negócio? Quer automatizar um processo da sua empresa ou qualquer que seja sua necessidade, podemos ajudar.',
        icon: <Lightbulb size={22} />,
      },
      {
        title: 'Aplicativo Mobile',
        category: 'byDemand',
        price: 'A partir de R$15.000',
        description:
          'Fidelize seus clientes com um aplicativo sob-demanda para suas necessidades. Nossos aplicativos são desenvolvidos e personalizados para Android e Apple.',
        icon: <DeviceMobile size={22} />,
      },
      {
        title: 'Desenvolvedor FullStack',
        category: 'daas',
        price: 'R$94/hora',
        description:
          'Precisa de um profissional experiente em desenvolvimento fullstack, com atuações em times multidisciplinares? Possuo 6 anos de experiência com React, Next, Node, React Native e Solidity.',
        icon: <Code size={22} />,
      },
      {
        title: 'Manutenção Web',
        category: 'daas',
        price: 'R$94/hora',
        description:
          'Seu site precisa de manutenção? Já possui um site ou sistema que deseja manter, mas precisa atualizar, oferecemos suporte e manutenção de websites.',
        icon: <Wrench size={22} />,
      },
    ],
  },
}

export function Services() {
  const { language } = useLanguage()
  const texts = language === 'en' ? dictionary.en : dictionary.pt

  return (
    <div className="flex flex-col w-full max-w-[660px] mx-auto items-center mt-16">
      <div className="flex flex-col gap-2 w-full">
        <CodeBlock size={22} />
        <h2 className="text-xl">{texts.title}</h2>
        <p className="text-zinc-400 text-sm">{texts.description}</p>
      </div>

      <Tabs defaultValue="byDemand" className="w-full mt-8">
        <TabsList>
          <TabsTrigger value="byDemand">{texts.byDemand}</TabsTrigger>
          <TabsTrigger value="daas">{texts.daas}</TabsTrigger>
        </TabsList>
        <TabsContent value="byDemand">
          <div className="flex flex-col w-full gap-4 mt-8">
            {texts.services.map((item, index) => {
              if (item.category === 'byDemand') {
                return (
                  <Card key={index}>
                    <CardHeader>{item.icon}</CardHeader>
                    <CardContent>
                      <div className="flex gap-2 text-xl items-center">
                        <h2 className="text-xl">{item.title}</h2>
                        <span className="bg-secondary p-0.5 rounded-sm text-xs text-zinc-800 dark:text-zinc-300 border">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400 mt-1">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              }
              return null
            })}
          </div>
        </TabsContent>
        <TabsContent value="daas">
          <div className="flex flex-col w-full gap-4 mt-8">
            {texts.services.map((item, index) => {
              if (item.category === 'daas') {
                return (
                  <Card key={index}>
                    <CardHeader>{item.icon}</CardHeader>
                    <CardContent>
                      <div className="flex gap-2 text-xl items-center">
                        <h2 className="text-xl">{item.title}</h2>
                        <span className="bg-secondary p-0.5 rounded-sm text-xs text-zinc-800 dark:text-zinc-300 border">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400 mt-1">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              }
              return null
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
