export const Footer = () => {
  return (
    <footer className='border-t border-brand-alabaster/10 bg-brand-black py-6'>
      <div className='container flex flex-col sm:flex-row items-center justify-between gap-3'>
        <span className='font-mono text-xs text-brand-alabaster/30'>
          <span className='text-brand-orange'>©</span> {new Date().getFullYear()} Yaser Abdulrahman. All rights reserved.
        </span>
        <span className='font-mono text-xs text-brand-alabaster/20'>
          Built with Next.js + TypeScript
        </span>
      </div>
    </footer>
  )
}
