'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string
}

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className='text-brand-orange border border-brand-orange/30 bg-brand-orange/10 text-xs font-mono py-1 px-3 rounded'
      {...props}
    >
      {name}
    </motion.span>
  )
}
