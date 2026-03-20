import { SectionsTitle } from '@/app/components/sections-title'
import { ExperienceItem } from './experience-item'
import { WorkExperience } from '@/app/types/work-experience'

type WorksExperienceProps = {
  experiences: WorkExperience[]
}

export const WorksExperience = ({ experiences }: WorksExperienceProps) => {
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.startDate).getTime()
    const dateB = new Date(b.startDate).getTime()
    return dateB - dateA
  })

  return (
    <section
      id='experiences'
      className='py-24 bg-brand-prussian/10'
    >
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-20'>
          {/* Left: heading + tagline */}
          <div className='lg:max-w-[280px] flex-shrink-0'>
            <SectionsTitle subtitle='experiences' title='Work Experience' />
            <p className='text-brand-alabaster/45 mt-6 text-sm leading-relaxed'>
              Focused on building systems that scale. Each role shaped the engineer I am today.
            </p>
          </div>

          {/* Right: timeline */}
          <div className='flex-1'>
            {sortedExperiences?.map((experience, i) => (
              <ExperienceItem
                key={experience.companyName}
                experience={experience}
                isLast={i === sortedExperiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
