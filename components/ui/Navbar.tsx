'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const BRAND_NAME = 'WEQ'
const CTA = { label: 'Request Demo', href: '#contact' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e2e5eb] shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <img 
            src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773907724425-1596433131641.jpg" 
            alt="WEQ logo" 
            className="h-9 w-auto object-contain" 
          />
          <span className="font-heading font-bold text-xl tracking-tight text-[#0f1a27] group-hover:text-[#1a3a5c] transition-colors duration-300">
            {BRAND_NAME}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative px-5 py-2.5 text-sm font-body text-[#4a5568] hover:text-[#0f1a27] rounded-md hover:bg-[#f8f9fb] transition-all duration-300"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-5 right-5 h-px bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={CTA.href}
            className="relative px-6 py-2.5 text-sm font-body font-semibold bg-[#1a3a5c] text-[#ffffff] rounded-md hover:bg-[#122842] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(26,58,92,0.25)]"
          >
            {CTA.label}
          </a>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-md text-[#4a5568] hover:text-[#0f1a27] hover:bg-[#f8f9fb] transition-colors duration-200"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#ffffff] border-b border-[#e2e5eb] animate-fade-in">
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-body text-[#4a5568] hover:text-[#0f1a27] rounded-md hover:bg-[#f8f9fb] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 mt-1 border-t border-[#e2e5eb]">
              <a
                href={CTA.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-sm font-body font-semibold text-center bg-[#1a3a5c] text-[#ffffff] rounded-md hover:bg-[#122842] transition-colors duration-200"
              >
                {CTA.label}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}