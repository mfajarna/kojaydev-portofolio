import * as React from 'react'
import CardProjectsComponent from './molecules/CardProjectsComponent'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#1A2249]'>
                Projects
            </p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <CardProjectsComponent
                    title={'Mobile TopUp'}
                    tech={'React Native'}
                    projectUrl={'/assets/projects1.png'}
                />

                <CardProjectsComponent
                    title={'E-Puskesmas'}
                    tech={'Laravel Framework'}
                    projectUrl={'/assets/projects2.png'}
                />
            </div>
        </div>
    </div>
  )
}

export default Projects