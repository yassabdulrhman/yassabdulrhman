'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { NavItem } from './nav-item'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'Skills',
    href: '/#skills'
  },
  {
    label: 'Experience',
    href: '/#experiences'
  },
  {
    label: 'Contact',
    href: '/#contact'
  }
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='fixed top-0 w-full z-50 h-20 flex items-center justify-center border-b border-brand-alabaster/10 bg-brand-black/90 backdrop-blur-md'
    >
      <div className='container flex items-center justify-between'>
        {/* Logo / Wordmark */}
        <Link href='/' className='flex items-center gap-2 group'>
          <span className='font-mono text-brand-orange font-bold text-lg tracking-tight group-hover:text-amber-400 transition-colors'>
            YAJ
          </span>
          <span className='cursor-blink font-mono text-brand-orange/60 text-lg'>_</span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-brand-alabaster/60 hover:text-brand-white focus:outline-none transition-colors'
          aria-label='Toggle menu'
        >
          <div className='w-6 h-5 flex flex-col justify-between'>
            <span className={`block w-full h-px bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-full h-px bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-full h-px bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='absolute top-20 left-0 w-full bg-brand-black border-b border-brand-alabaster/10 md:hidden overflow-hidden'
          >
            <div className='container py-6'>
              <div className='flex flex-col gap-5'>
                {NAV_ITEMS.map((item) => (
                  <NavItem key={item.label} {...item} onClick={() => setIsOpen(false)} />
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
