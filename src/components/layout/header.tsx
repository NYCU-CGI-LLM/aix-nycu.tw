import Link from 'next/link'
import { NavMenu } from './nav-menu'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#0033A0] shadow-md z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <div className="flex items-center">
            <img src="/nycu-logo.png" alt="NYCU Logo" className="h-16 w-auto" />
            <Link href="/" className="font-bold text-xl text-white">數位教學工作小組</Link>
        </div>
        <NavMenu />
      </div>
    </header>
  )
}