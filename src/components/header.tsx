import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex gap-2 justify-between max-w-[660px] w-full mx-auto items-center">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/luuanfaria.png" />
          <AvatarFallback>LF</AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-start">
          <span className="text-black dark:text-white font-medium text-base">
            Luan Faria
          </span>
          <span className="text-black/70 dark:text-zinc-400 font-light text-xs">
            Web Developer, Explorer, Coffe Lover.
          </span>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex flex-row gap-2 items-center border-r-2 pr-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>

          <span className="font-sans font-normal text-base text-green-500">
            Available for Work
          </span>
        </div>

        <span className="flex h-22 w-[2px] rounded-2xl bg-black" />

        <Link href="https://linkedin.com/in/luuanfaria" target="_blank">
          <LinkedinLogo size={22} />
        </Link>
        <Link href="https://github.com/luuanfaria" target="_blank">
          <GithubLogo size={22} />
        </Link>
      </div>
    </header>
  )
}
