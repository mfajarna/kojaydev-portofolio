import * as React from 'react'
import CardProjectsComponent from './molecules/CardProjectsComponent'
import { dataProjects } from '@/helpers/BulkData'

const Projects = () => {
    const slicingData = dataProjects.slice(0,4);
    const[data, setData] = React.useState(slicingData);
    const[statusBtn, setStatusBtn] = React.useState(false);
    const countingProjects = dataProjects.length;

    const handleBtnMore = () => {
        setStatusBtn(!statusBtn);
        statusBtn ? setData(slicingData) : setData(dataProjects);
    }


  return (
    <div data-aos="fade-left" id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#1A2249]'>
                Projects
            </p>
            <h2 className='py-4'>What I&apos;ve Built <span>({countingProjects})</span></h2>
            <div className='grid md:grid-cols-2 gap-8'>
                {data.map((item, index) => {
                    return(
                    <CardProjectsComponent
                        key={index}
                        title={item.title}
                        tech={item.tech}
                        projectUrl={item.projectUrl}
                        projectStorage={item.projectStorage}
                    />
                    )
                })}
            </div>

            <div className='justify-center items-center flex my-4'>
                <button onClick={handleBtnMore} className='py-2 px-4 cursor-pointer bg-indigo-500 shadow-lg shadow-indigo-500/50 justify-center items-center hover:scale-105 ease-in duration-300'>
                    <p className='text-white font-semiBold'>{statusBtn ? 'Load Less' : 'Load More'}</p>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Projects