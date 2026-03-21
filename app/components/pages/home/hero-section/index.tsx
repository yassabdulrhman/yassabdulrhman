'use client'

import { Button } from '@/app/components/button'
import { HiArrowNarrowRight, HiArrowNarrowDown, HiDownload } from 'react-icons/hi'
import { HomePageInfo } from '@/app/types/page-info'
import { CMSIcon } from '@/app/components/cms-icon'
import { motion } from 'framer-motion'

const CV_PATH = '/assets/Yaser_Abdulrahman_Aljedaie-Full_Stack_Engineer.pdf'

type HeroSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleProjects = () => {
    const projectsSection = document.querySelector('#projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/projects'
    }
  }

  return (
    <section className='relative w-full min-h-screen flex items-center bg-brand-black overflow-hidden'>
      {/* Animated grid background */}
      <div className='absolute inset-0 bg-grid opacity-100 pointer-events-none' />

      {/* Radial gradient center fade */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 0%, #000000 75%)' }}
      />

      {/* Orange glow — top right */}
      <div
        className='absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none'
        style={{ background: 'radial-gradient(circle at 80% 5%, rgba(252,163,17,0.07) 0%, transparent 55%)' }}
      />

      {/* Prussian blue glow — bottom left */}
      <div
        className='absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none'
        style={{ background: 'radial-gradient(circle at 10% 95%, rgba(20,33,61,0.9) 0%, transparent 60%)' }}
      />

      <div className='container relative z-10 py-32'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16'>

          {/* ── Left: Text ── */}
          <div className='flex-1 max-w-[600px]'>

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='flex items-center gap-2 mb-6'
            >
              <span className='w-2 h-2 rounded-full bg-brand-orange glow-orange' />
              <span className='font-mono text-xs text-brand-orange/70 tracking-widest uppercase'>
                Available for hire
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-white leading-[1.05] tracking-tight'
            >
              Yaser<br />
              <span className='text-brand-white'>Abdulrahman</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className='mt-5 inline-flex items-center gap-3'
            >
              <span className='h-px w-10 bg-brand-orange' />
              <span className='font-mono text-brand-orange text-sm font-semibold tracking-widest uppercase'>
                Full-Stack Developer
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className='mt-8 text-brand-alabaster/55 text-lg leading-relaxed max-w-[460px]'
            >
              Building enterprise-grade systems with precision and depth.
              From architecture to deployment — I engineer what matters.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className='mt-10 flex flex-wrap items-center gap-4'
            >
              <Button
                onClick={handleProjects}
                className='shadow-button px-7 py-3.5 text-xs font-bold tracking-widest uppercase'
              >
                View Projects
                <HiArrowNarrowRight size={15} />
              </Button>
              <button
                onClick={handleContact}
                className='px-7 py-3.5 text-xs font-bold tracking-widest uppercase border border-brand-alabaster/20 text-brand-alabaster/70 rounded hover:border-brand-orange hover:text-brand-orange transition-all duration-200'
              >
                Contact Me
              </button>
              <a
                href={CV_PATH}
                download='Yaser_Abdulrahman_CV.pdf'
                className='inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold tracking-widest uppercase border border-brand-orange/40 text-brand-orange/80 rounded hover:bg-brand-orange/10 hover:border-brand-orange hover:text-brand-orange transition-all duration-200'
              >
                <HiDownload size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='mt-10 flex items-center gap-6'
            >
              {homeInfo.socials.map((contact, index) => (
                <a
                  key={`contact-${index}`}
                  href={contact.url}
                  target='_blank'
                  rel='noreferrer'
                  className='text-brand-alabaster/35 hover:text-brand-orange transition-colors duration-200 text-xl'
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Terminal card ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='w-full lg:w-[420px] flex-shrink-0'
          >
            <div className='bg-brand-prussian border border-brand-alabaster/10 rounded-lg overflow-hidden shadow-card'>
              {/* Terminal bar */}
              <div className='flex items-center gap-2 px-4 py-3 border-b border-brand-alabaster/10 bg-black/40'>
                <span className='w-2.5 h-2.5 rounded-full bg-red-500/70' />
                <span className='w-2.5 h-2.5 rounded-full bg-yellow-500/70' />
                <span className='w-2.5 h-2.5 rounded-full bg-green-500/70' />
                <span className='ml-3 font-mono text-xs text-brand-alabaster/25'>~/yaser/profile.json</span>
              </div>
              {/* JSON content */}
              <div className='p-5 font-mono text-sm leading-7'>
                <p className='text-brand-alabaster/30'>{'{'}</p>
                <p className='pl-4'><span className='text-brand-orange'>&quot;role&quot;</span><span className='text-brand-alabaster/30'>: </span><span className='text-green-400'>&quot;Full-Stack Developer&quot;</span><span className='text-brand-alabaster/30'>,</span></p>
                <p className='pl-4'><span className='text-brand-orange'>&quot;focus&quot;</span><span className='text-brand-alabaster/30'>: </span><span className='text-green-400'>&quot;Enterprise Systems&quot;</span><span className='text-brand-alabaster/30'>,</span></p>
                <p className='pl-4'><span className='text-brand-orange'>&quot;stack&quot;</span><span className='text-brand-alabaster/30'>: [</span></p>
                <p className='pl-8 text-green-400'>&quot;React&quot;<span className='text-brand-alabaster/30'>,</span></p>
                <p className='pl-8 text-green-400'>&quot;Node.js&quot;<span className='text-brand-alabaster/30'>,</span></p>
                <p className='pl-8 text-green-400'>&quot;TypeScript&quot;<span className='text-brand-alabaster/30'>,</span></p>
                <p className='pl-8 text-green-400'>&quot;MySQL&quot;</p>
                <p className='pl-4 text-brand-alabaster/30'>]<span className='text-brand-alabaster/30'>,</span></p>
                <p className='pl-4'><span className='text-brand-orange'>&quot;available&quot;</span><span className='text-brand-alabaster/30'>: </span><span className='text-blue-400'>true</span></p>
                <p className='text-brand-alabaster/30'>{'}'}</p>
                <p className='mt-3 text-brand-alabaster/30'>
                  <span className='text-brand-orange'>$</span>{' '}
                  <span className='text-brand-white'>node run yaser</span>
                  <span className='cursor-blink text-brand-orange ml-0.5'>▌</span>
                </p>
              </div>
            </div>

            {/* Stat pills */}
            <div className='mt-4 grid grid-cols-3 gap-3'>
              {[
                { value: '5+', label: 'Yrs Exp.' },
                { value: '20+', label: 'Projects' },
                { value: '∞', label: 'Commits' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className='bg-brand-prussian/40 border border-brand-alabaster/10 rounded p-4 text-center hover:border-brand-orange/30 transition-colors duration-200'
                >
                  <p className='text-brand-orange font-bold text-2xl font-mono'>{stat.value}</p>
                  <p className='text-brand-alabaster/35 text-xs font-mono mt-1'>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='mt-20 flex flex-col items-center gap-2'
        >
          <span className='font-mono text-xs text-brand-alabaster/25 tracking-widest uppercase'>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <HiArrowNarrowDown className='text-brand-orange/40' size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
