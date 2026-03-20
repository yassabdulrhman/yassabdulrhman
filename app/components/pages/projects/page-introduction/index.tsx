'use client'

import { Link } from '@/app/components/link'
import { SectionsTitle } from '@/app/components/sections-title'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const PageIntroduction = () => {
  return (
    <section className='relative w-full py-28 flex flex-col items-center justify-center px-6 bg-brand-black overflow-hidden'>
      {/* Grid bg */}
      <div className='absolute inset-0 bg-grid opacity-100 pointer-events-none' />
      <div
        className='absolute inset-0 pointer-events-none'
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #000000 75%)' }}
      />

      <div className='relative z-10 flex flex-col items-center'>
        <SectionsTitle
          subtitle='projects'
          title='All Projects'
          className='text-center items-center'
        />
        <motion.div
          className='flex flex-col items-center mt-6'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className='text-brand-alabaster/45 text-center max-w-[560px] text-sm leading-relaxed'>
            A collection of systems, tools, and applications I have engineered —
            each built with precision, purpose, and a focus on long-term value.
          </p>
          <Link
            href='/'
            className='mt-8 inline-flex items-center gap-2 font-mono text-xs text-brand-alabaster/40 hover:text-brand-orange transition-colors duration-200 uppercase tracking-wider'
          >
            <HiArrowNarrowLeft size={14} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
