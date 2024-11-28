'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type NavItem = {
  title: string
  href: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: '關於我們',
    href: '/about',
    children: [
      { title: '團隊介紹', href: '/about/team' },
      { title: '願景使命', href: '/about/vision' },
    ],
  },
  {
    title: '核心服務',
    href: '/services',
    children: [
      { title: 'AI助手', href: '/services/ai-assistant' },
      { title: 'AI Studio', href: '/services/ai-studio' },
      { title: '虛擬實驗室', href: '/services/virtual-lab' },
      { title: '聲音合成', href: '/services/voice' },
    ],
  },
  { title: '合作夥伴', href: '/partners' },
  { title: '資源中心', href: '/resources' },
  { title: '聯絡我們', href: '/contact' },
]

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* 桌面版導航 */}
      <nav className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <div key={item.href} className="relative group">
            <Link
              href={item.href}
              className={cn(
                'hover:text-primary transition-colors',
                pathname === item.href && 'text-primary font-medium'
              )}
            >
              {item.title}
            </Link>
            
            {item.children && (
              <div className="absolute top-full left-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* 行動版選單按鈕 */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* 行動版導航選單 */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-50 md:hidden transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-4">
          <button
            className="mb-4"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="space-y-4">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block py-2 text-lg',
                    pathname === item.href && 'text-primary font-medium'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}