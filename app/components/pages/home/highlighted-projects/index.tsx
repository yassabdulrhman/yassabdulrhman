import { SectionsTitle } from '@/app/components/sections-title'
import { ProjectCard } from './project-card'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'
import { Button } from '@/app/components/button'

type HighlightedProjectsProps = {
  projects: Project[]
}

// Detect SFES project by slug or title keywords
const isFlagship = (project: Project) => {
  const key = (project.slug + project.title).toLowerCase()
  return key.includes('sfes') || key.includes('school') || key.includes('flagship')
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  const sorted = [...(projects ?? [])].sort((a, b) => {
    // Push flagship to top
    if (isFlagship(a) && !isFlagship(b)) return -1
    if (!isFlagship(a) && isFlagship(b)) return 1
    return 0
  })

  return (
    <section id='projects' className='container py-24'>
      <SectionsTitle subtitle='highlights' title='Featured Projects' />

      <div className='mt-14 flex flex-col gap-6'>
        {sorted.slice(0, 3).map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featured={i === 0 && isFlagship(project)}
          />
        ))}
      </div>

      <div className='mt-12 flex items-center gap-4'>
        <span className='text-brand-alabaster/40 text-sm font-mono'>// more work available</span>
        <Link href='/projects'>
          <Button className='w-max shadow-button text-xs tracking-widest uppercase'>
            All Projects <HiArrowNarrowRight size={14} />
          </Button>
        </Link>
      </div>
    </section>
  )
}
