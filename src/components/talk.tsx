import { HandWaving } from '@phosphor-icons/react/dist/ssr'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'

export function Talk() {
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
                <h2 className="text-xl">
                  Let&apos;s create something amazing?
                </h2>
              </div>
              <p className="text-sm text-zinc-600 mt-1">
                Now that you&apos;ve come this far, let&apos;s work together on
                your next project?
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary">Get In Touch</Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  )
}
