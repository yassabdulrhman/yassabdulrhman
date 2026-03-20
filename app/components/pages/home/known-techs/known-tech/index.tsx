'use client'

import { CMSIcon } from '@/app/components/cms-icon'
import { KnownTech as IKnownTech } from '@/app/types/projects'
import { getRelativeTimeString } from '@/app/utils/get-relative-time'

type KnownTechProps = {
  tech: IKnownTech
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'en-US'
  ).replace('ago', '')

  return (
    <div className='group p-4 rounded bg-brand-prussian/40 border border-brand-alabaster/10 flex items-center justify-between gap-3 hover:border-brand-orange/40 hover:bg-brand-prussian/60 transition-all duration-200 cursor-default'>
      <div className='flex items-center gap-3'>
        <div className='text-brand-alabaster/50 group-hover:text-brand-orange transition-colors duration-200 text-lg'>
          <CMSIcon icon={tech.iconSvg} />
        </div>
        <p className='font-mono text-sm text-brand-alabaster/70 group-hover:text-brand-white transition-colors duration-200 font-medium'>{tech.name}</p>
      </div>
      <span className='font-mono text-xs text-brand-alabaster/30 group-hover:text-brand-orange/60 transition-colors duration-200 whitespace-nowrap'>{relativeTime}</span>
    </div>
  )
}
