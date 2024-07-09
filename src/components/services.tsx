import {
  Browser,
  CodeBlock,
  DeviceMobile,
  Globe,
  Wrench,
} from '@phosphor-icons/react/dist/ssr'
import { Card, CardContent, CardHeader } from './ui/card'

const services = [
  {
    title: 'Website Landing Page',
    price: 'From $799',
    description:
      'How about a personalized page focused on lead conversions and information? A landing page is ideal for this purpose, impacting your clients with concise information and clear calls to action.',
    icon: <Browser size={22} />,
  },
  {
    title: 'Full Website',
    price: 'From $1599',
    description:
      'Need a website that includes every detail about your business? A full website can include all the information and services your company offers.',
    icon: <Globe size={22} />,
  },
  {
    title: 'Mobile App',
    price: 'From $3000',
    description:
      'Build customer loyalty with a custom on-demand app tailored to your needs. Our apps are developed and customized for both Android and Apple devices.',
    icon: <DeviceMobile size={22} />,
  },
  {
    title: 'Web Maintenance',
    price: 'From $200',
    description:
      'Does your website need maintenance? If you already have a website or system that you want to keep updated, we offer support and maintenance services for websites.',
    icon: <Wrench size={22} />,
  },
]

export function Services() {
  return (
    <div className="flex flex-col w-full max-w-[660px] mx-auto items-center mt-16">
      <div className="flex flex-col gap-2 w-full">
        <CodeBlock size={22} />
        <h2 className="text-xl">Services I offer</h2>
        <p className="text-zinc-400 text-sm">
          Let&apos;s work together on your next amazing project.
        </p>
      </div>

      <div className="flex flex-col w-full gap-4 mt-8">
        {services.map((item, index) => (
          <Card key={index}>
            <CardHeader>{item.icon}</CardHeader>
            <CardContent>
              <div className="flex gap-2 text-xl items-center">
                <h2 className="text-xl">{item.title}</h2>
                <span className="bg-secondary p-0.5 rounded-sm text-xs text-zinc-800 dark:text-zinc-300 border border-zinc-400">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-1">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
