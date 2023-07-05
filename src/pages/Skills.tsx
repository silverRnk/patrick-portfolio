
import SkillCard from '../components/SkillCard/SkillCard'
import { skillCards } from '../data'

const Skills = () => {
  return (
    <section className='grid py-6 px-4'>
      <div id='skill-container' className='justify-self-center glass-effect-yellow min-h-[90vh] max-w-[1200px] lg:min-w-[960px]  w-full p-4 sm:p-6' >
        <div id='skill-container-header' className='hidden justify-between'>
          <input />
        </div>

        <h3 className='text-xl sm:text-2xl mb-[0.75em] font-bold'>Skills</h3>
        <div role='list' id='skill-item-container' className='flex flex-wrap justify-center gap-4 md:gap-7'>
          {skillCards.map(skillCard => (
            <SkillCard {...skillCard}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills