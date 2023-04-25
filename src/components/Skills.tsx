import Image from 'next/image'
import * as React from 'react'
import CardSkillsComponent from './molecules/CardSkillsComponent'

const Skills = () => {
  return (
    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#1A2249]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <CardSkillsComponent />
        </div>
    </div>
  )
}

export default Skills