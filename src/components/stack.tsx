import { Browser, Stack } from '@phosphor-icons/react/dist/ssr'
import { Card, CardContent, CardHeader } from './ui/card'

const services = [
  {
    title: 'Next.js',
    description: 'Framework React para desenvolvimento web.',
    icon: <Browser size={22} />,
  },
  {
    title: 'Node',
    description: 'Backend language.',
    icon: <Browser size={22} />,
  },
  {
    title: 'Resend',
    description: 'Email Client.',
    icon: <Browser size={22} />,
  },
  {
    title: 'Figma',
    description: 'Design tool.',
    icon: <Browser size={22} />,
  },
  {
    title: 'React Native',
    description: 'Framework para desenvolvimento mobile.',
    icon: <Browser size={22} />,
  },
]

export function TechStack() {
  return (
    <div className="flex flex-col w-full max-w-[660px] mx-auto items-center mt-16">
      <div className="flex flex-col gap-2 w-full">
        <Stack size={22} />
        <h2 className="text-xl">Tech Stack</h2>
        <p className="text-zinc-400 text-sm">
          Some of the tools I use in my workflow.
        </p>
      </div>

      <div className="flex flex-col w-full gap-4 mt-8">
        {services.map((item, index) => (
          <Card key={index}>
            <CardHeader>{item.icon}</CardHeader>
            <CardContent>
              <div className="flex gap-2 text-xl items-center">
                <h2 className="text-xl">{item.title}</h2>
              </div>
              <p className="text-sm text-zinc-600 mt-1">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
