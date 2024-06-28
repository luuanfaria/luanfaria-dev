import Image from 'next/image'
import { Description } from './components/description'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full items-center">
      <header className="flex items-center justify-center h-[60px] w-[60] fixed pt-4 z-[100]">
        <Image src="/logo-white.png" alt="" width={60} height={60} />
      </header>

      <section className="flex flex-col items-center justify-center mt-40">
        <p className="flex text-green-500 items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />{' '}
            <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />{' '}
          </span>
          Available for Work
        </p>

        <Description />

        <h4 className="text-zinc-400 text-xl max-sm:px-8 items-center text-center font-light">
          Hello 👋🏼 I am Luan Faria a Fullstack Web Developer
        </h4>

        <Link
          href="https://linkedin.com/in/luuanfaria"
          target="_blank"
          className="rounded-3xl border-2 border-zinc-400 text-zinc-400 py-2 px-6 hover:bg-white hover:text-black transition-all mt-8"
        >
          Let&lsquo;s talk
        </Link>
      </section>
    </main>
  )
}
