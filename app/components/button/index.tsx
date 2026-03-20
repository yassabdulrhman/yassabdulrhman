import { cn } from '@/app/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-brand-orange py-3 px-5 rounded text-brand-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-amber-400 active:scale-95 transition-all duration-200 disabled:opacity-40 tracking-wide',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
