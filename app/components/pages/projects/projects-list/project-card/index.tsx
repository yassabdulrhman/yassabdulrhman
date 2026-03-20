import { Project } from '@/app/types/projects'
import Image from 'next/image'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map((technology) => technology.name).join(', ')

  return (
    <div className='rounded-lg h-[420px] flex flex-col bg-brand-prussian/40 overflow-hidden border border-brand-alabaster/10 hover:border-brand-orange/40 hover:shadow-card-hover transition-all duration-300 group'>
      <div className='w-full h-48 overflow-hidden'>
        <Image
          src={project.thumbnail.url}
          alt={`Project Image ${project.title}`}
          width={380}
          height={200}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
          unoptimized
        />
      </div>
      <div className='flex-1 flex flex-col p-6'>
        <strong className='font-semibold text-brand-white/90 group-hover:text-brand-orange transition-colors duration-200'>
          {project.title}
        </strong>
        <p className='mt-2 text-brand-alabaster/50 text-sm line-clamp-3 leading-relaxed'>
          {project.shortDescription}
        </p>
        <span className='text-brand-orange/60 text-xs font-mono block mt-auto pt-4 truncate'>
          {technologies}
        </span>
      </div>
    </div>
  )
}
