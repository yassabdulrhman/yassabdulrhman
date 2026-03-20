import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  label: string
  href: string
  onClick?: () => void
}

export const NavItem = ({ label, href, onClick }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={
        cn(
          'text-brand-alabaster/50 flex items-center gap-1.5 text-sm font-mono tracking-wide hover:text-brand-white transition-colors duration-200',
          isActive && 'text-brand-orange'
        )
      }
    >
      <span className={cn('text-brand-orange/60', isActive && 'text-brand-orange')}>//</span>
      {label}
    </Link>
  )
}
