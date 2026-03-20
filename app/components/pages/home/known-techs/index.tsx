'use client'

import { SectionsTitle } from '@/app/components/sections-title'
import { KnownTech } from './known-tech'
import { KnownTech as IKnownTech } from '@/app/types/projects'
import { motion } from 'framer-motion'

type KnownTechsProps = {
  techs: IKnownTech[]
}

const FRONTEND_KEYWORDS = ['react', 'next', 'vue', 'angular', 'typescript', 'javascript', 'css', 'html', 'tailwind', 'sass', 'redux', 'vite', 'webpack', 'svelte']
const DEVOPS_KEYWORDS = ['docker', 'kubernetes', 'aws', 'gcp', 'azure', 'ci', 'cd', 'nginx', 'linux', 'git', 'github', 'gitlab', 'jenkins', 'terraform', 'ansible', 'keycloak', 'vercel', 'netlify']

const getTechGroup = (name: string): 'frontend' | 'backend' | 'devops' => {
  const lower = name.toLowerCase()
  if (FRONTEND_KEYWORDS.some((k) => lower.includes(k))) return 'frontend'
  if (DEVOPS_KEYWORDS.some((k) => lower.includes(k))) return 'devops'
  return 'backend'
}

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  type GroupKey = 'frontend' | 'backend' | 'devops'
  const allGroups: { label: string; key: GroupKey; items: IKnownTech[] }[] = [
    { label: 'Frontend', key: 'frontend' as GroupKey, items: techs?.filter((t) => getTechGroup(t.name) === 'frontend') ?? [] },
    { label: 'Backend', key: 'backend' as GroupKey, items: techs?.filter((t) => getTechGroup(t.name) === 'backend') ?? [] },
    { label: 'DevOps & Tools', key: 'devops' as GroupKey, items: techs?.filter((t) => getTechGroup(t.name) === 'devops') ?? [] },
  ]
  const groups = allGroups.filter((g) => g.items.length > 0)

  return (
    <section id='skills' className='py-24 bg-brand-prussian/20'>
      <div className='container'>
        <SectionsTitle title='Tech Stack' subtitle='skills' />

        <div className='mt-14 flex flex-col gap-12'>
          {groups.map((group, gi) => (
            <div key={group.key}>
              {/* Group header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: gi * 0.1 }}
                className='flex items-center gap-4 mb-6'
              >
                <span className='font-mono text-xs text-brand-orange/70 tracking-widest uppercase'>{group.label}</span>
                <span className='flex-1 h-px bg-brand-alabaster/10' />
                <span className='font-mono text-xs text-brand-alabaster/25'>{group.items.length} tools</span>
              </motion.div>

              {/* Tech grid */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                {group.items.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 + gi * 0.1 }}
                  >
                    <KnownTech tech={tech} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
