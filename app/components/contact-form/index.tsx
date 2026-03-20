'use client'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'
import { Button } from '../button'
import { SectionsTitle } from '../sections-title'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import axios from 'axios'
import { fadeUpAnimation } from '@/app/lib/animations'

const CONTACT_LINKS = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'yaserabdulrahman@outlook.com',
    href: 'mailto:yaserabdulrahman@outlook.com',
  },
  {
    icon: SiLinkedin,
    label: 'LinkedIn',
    value: '/in/yassabdulrhman',
    href: 'https://www.linkedin.com/in/yassabdulrhman/',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: '@yassabdulrhman',
    href: 'https://github.com/yassabdulrhman',
  },
]

export const ContactForm = () => {
  const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
  })

  type ContactFormData = z.infer<typeof contactFormSchema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Message sent successfully')
      reset()
    } catch (_error) {
      toast.error('Error sending message, please try again')
    }
  }

  return (
    <section id='contact' className='py-24 bg-brand-prussian/20 border-t border-brand-alabaster/10'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-16 lg:gap-24 items-start'>

          {/* Left: heading + contact links */}
          <div className='flex-1 max-w-[380px]'>
            <SectionsTitle subtitle='contact' title="Let's Build Something." />
            <p className='text-brand-alabaster/45 mt-5 text-sm leading-relaxed'>
              Have a project in mind or want to explore a collaboration?
              I&apos;m open to the right opportunities.
            </p>

            <div className='mt-10 flex flex-col gap-4'>
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='group flex items-center gap-4 p-4 rounded bg-brand-prussian/40 border border-brand-alabaster/10 hover:border-brand-orange/40 hover:bg-brand-prussian/60 transition-all duration-200'
                >
                  <div className='w-9 h-9 flex items-center justify-center rounded bg-brand-black border border-brand-alabaster/15 text-brand-alabaster/40 group-hover:text-brand-orange group-hover:border-brand-orange/40 transition-colors duration-200'>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className='text-xs font-mono text-brand-alabaster/35 uppercase tracking-wider'>{label}</p>
                    <p className='text-sm text-brand-alabaster/70 group-hover:text-brand-white transition-colors duration-200 mt-0.5'>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className='flex-1 w-full'>
            <motion.form
              className='flex flex-col gap-4 w-full'
              onSubmit={handleSubmit(onSubmit)}
              {...fadeUpAnimation}
            >
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block font-mono text-xs text-brand-alabaster/35 uppercase tracking-wider mb-2'>Name</label>
                  <input
                    autoComplete='off'
                    type='text'
                    placeholder='John Doe'
                    className='w-full h-12 bg-brand-prussian/40 border border-brand-alabaster/15 rounded text-brand-white text-sm px-4 placeholder:text-brand-alabaster/25 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/30 transition-all'
                    {...register('name')}
                  />
                </div>
                <div>
                  <label className='block font-mono text-xs text-brand-alabaster/35 uppercase tracking-wider mb-2'>Email</label>
                  <input
                    autoComplete='off'
                    type='email'
                    placeholder='john@company.com'
                    className='w-full h-12 bg-brand-prussian/40 border border-brand-alabaster/15 rounded text-brand-white text-sm px-4 placeholder:text-brand-alabaster/25 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/30 transition-all'
                    {...register('email')}
                  />
                </div>
              </div>
              <div>
                <label className='block font-mono text-xs text-brand-alabaster/35 uppercase tracking-wider mb-2'>Message</label>
                <textarea
                  autoComplete='off'
                  placeholder='Tell me about the project...'
                  className='resize-none w-full h-[140px] bg-brand-prussian/40 border border-brand-alabaster/15 rounded text-brand-white text-sm px-4 py-3 placeholder:text-brand-alabaster/25 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/30 transition-all'
                  maxLength={500}
                  {...register('message')}
                />
              </div>
              <div className='flex justify-start mt-2'>
                <Button
                  disabled={isSubmitting}
                  className='shadow-button text-xs tracking-widest uppercase px-8'
                >
                  Send Message
                  <HiArrowNarrowRight size={14} />
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
