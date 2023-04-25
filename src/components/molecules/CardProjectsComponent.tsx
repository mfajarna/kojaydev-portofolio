import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { CardProjectComponentProps } from '../types'

const CardProjectsComponent:React.FC<CardProjectComponentProps> = ({title, tech, projectUrl, projectStorage}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#1A2249] to-[#709dff] '>
        <Image
            src={projectStorage}
            alt='/'
            width='500'
            height='100'
            className='rounded-xl group-hover:opacity-10'
        />

        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
            <Link
                href={projectUrl}
                rel="noopener noreferrer"
            >
                <p className='text-center py-3 rounded-lg bg-white text-gray-600 font-bold text-lg cursor-pointer '>Repository</p>
            </Link>
        </div> 
    </div>
  )
}

export default CardProjectsComponent