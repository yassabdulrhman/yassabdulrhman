'use client'

import { TechBadge } from '@/app/components/tech-badge'
import { WorkExperience } from '@/app/types/work-experience'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { motion } from 'framer-motion'
import { enUS as defaultLocale } from 'date-fns/locale/en-US'
import Image from 'next/image'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'

type ExperienceItemProps = {
  experience: WorkExperience
  isLast?: boolean
}

export const ExperienceItem = ({ experience, isLast = false }: ExperienceItemProps) => {
  const {
    companyName,
    companyUrl,
    companyLogo,
    role,
    endDate,
    description,
    technologies
  } = experience

  const startDate = new Date(experience.startDate)
  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: defaultLocale })
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: defaultLocale })
    : 'Present'

  const end = endDate ? new Date(endDate) : new Date()
  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years}y${monthsRemaining > 0 ? ` ${monthsRemaining}m` : ''}`
      : `${months}mo`

  const isCurrent = !endDate

  return (
    <motion.div
      className='grid grid-cols-[48px,1fr] gap-6'
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      {/* Timeline column */}
      <div className='flex flex-col items-center'>
        {/* Company logo dot */}
        <div className={`w-12 h-12 rounded-lg border flex items-center justify-center flex-shrink-0 ${isCurrent ? 'border-brand-orange bg-brand-prussian' : 'border-brand-alabaster/20 bg-brand-prussian/40'}`}>
          {companyLogo?.url ? (
            <Image
              src={companyLogo.url}
              alt={`Company Logo ${companyName}`}
              width={32}
              height={32}
              className='rounded w-7 h-7 object-contain'
            />
          ) : (
            <span className='text-brand-orange font-mono font-bold text-xs'>
              {companyName?.[0] ?? '?'}
            </span>
          )}
        </div>
        {/* Vertical line */}
        {!isLast && (
          <div className='flex-1 w-px bg-brand-alabaster/10 mt-2' />
        )}
      </div>

      {/* Content */}
      <div className='pb-12'>
        {/* Role + company */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3'>
          <div>
            <h4 className='text-brand-white font-semibold text-base'>{role}</h4>
            <a
              href={companyUrl}
              target='_blank'
              rel='noreferrer'
              className='font-mono text-sm text-brand-orange/70 hover:text-brand-orange transition-colors duration-200'
            >
              @ {companyName}
            </a>
          </div>
          <div className='flex flex-col items-start sm:items-end gap-1'>
            <span className='font-mono text-xs text-brand-alabaster/35'>
              {formattedStartDate} → {formattedEndDate}
            </span>
            <span className='font-mono text-xs text-brand-alabaster/30 bg-brand-prussian/60 border border-brand-alabaster/10 px-2 py-0.5 rounded'>
              {formattedDuration}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className='text-brand-alabaster/50 text-sm leading-relaxed mt-3 prose-sm prose-invert max-w-none'>
          <RichText content={description.raw} />
        </div>

        {/* Tech badges */}
        {technologies.length > 0 && (
          <div className='mt-5 flex gap-2 flex-wrap'>
            {technologies.map((tech, i) => (
              <TechBadge
                key={`experience-${companyName}-tech-${tech.name}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.07 }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
