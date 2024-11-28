import Link from 'next/link'
import { NavMenu } from './nav-menu'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-primary">
          數位教學工作小組
        </Link>
        <NavMenu />
      </div>
    </header>
  )
}