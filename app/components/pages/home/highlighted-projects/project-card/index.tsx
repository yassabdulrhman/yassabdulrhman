'use client'

import Image from 'next/image'
import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import { Project } from '@/app/types/projects'
import { HiArrowNarrowRight, HiExternalLink } from 'react-icons/hi'
import { Button } from '@/app/components/button'
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'

type ProjectCardProps = {
  project: Project
  featured?: boolean
}

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <motion.div
      className={`group relative bg-brand-prussian/40 border border-brand-alabaster/10 rounded-lg overflow-hidden hover:border-brand-orange/40 hover:shadow-card-hover transition-all duration-300 flex gap-0 flex-col lg:flex-row`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.5 }}
    >
      {/* Featured badge */}
      {featured && (
        <div className='absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-brand-orange/90 text-brand-black text-xs font-mono font-bold px-3 py-1 rounded tracking-wider uppercase'>
          <span className='w-1.5 h-1.5 rounded-full bg-brand-black' />
          Flagship
        </div>
      )}

      {/* Thumbnail */}
      <motion.div
        className='w-full h-[220px] sm:h-[280px] lg:w-[420px] lg:h-auto flex-shrink-0 overflow-hidden'
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Link href={`/projects/${project.slug}`}>
          <Image
            src={project.thumbnail.url}
            alt={`Project Thumbnail ${project.title}`}
            width={420}
            height={304}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
          />
        </Link>
      </motion.div>

      {/* Content */}
      <div className='flex-1 p-8 flex flex-col justify-between'>
        <div>
          {/* Title */}
          <motion.div {...fadeUpAnimation} transition={{ duration: 0.4 }}>
            <Link href={`/projects/${project.slug}`}>
              <h3 className='text-xl font-bold text-brand-white hover:text-brand-orange transition-colors duration-200 flex items-center gap-2'>
                {project.title}
                <HiExternalLink className='text-brand-alabaster/30 group-hover:text-brand-orange/60 transition-colors' size={16} />
              </h3>
            </Link>
          </motion.div>

          {/* Description */}
          <motion.p
            className='text-brand-alabaster/55 mt-4 text-sm leading-relaxed'
            {...fadeUpAnimation}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {project.shortDescription}
          </motion.p>

          {/* Tech stack */}
          <div className='flex gap-2 flex-wrap mt-6'>
            {project.technologies.map((tech, i) => (
              <TechBadge
                key={`${project.title}-tech-${tech.name}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: 0.1 + i * 0.07 }}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='mt-8'>
          <Link href={`/projects/${project.slug}`}>
            <Button className='w-max shadow-button text-xs tracking-widest uppercase'>
              View Project <HiArrowNarrowRight size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
