import {
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="flex w-full max-w-[660px] mx-auto items-center mt-8 justify-between mb-8">
      <p>© 2024 LuanDev •</p>
      <div className="flex gap-2 z-40">
        <Link href="https://linkedin.com/in/luuanfaria" target="_blank">
          <LinkedinLogo size={22} />
        </Link>
        <Link href="https://github.com/luuanfaria" target="_blank">
          <GithubLogo size={22} />
        </Link>
        <Link href="https://wa.me/5511960489011" target="_blank">
          <WhatsappLogo size={22} />
        </Link>
      </div>
    </div>
  )
}
