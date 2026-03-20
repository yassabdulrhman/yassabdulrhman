import { cn } from '@/app/lib/utils'
import NextLink from 'next/link'
import { ComponentProps } from 'react'

type LinkProps = ComponentProps<typeof NextLink>

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        'flex items-center gap-2 text-brand-alabaster/60 text-sm hover:text-brand-orange transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}
