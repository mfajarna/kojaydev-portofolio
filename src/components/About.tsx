import Image from 'next/image'
import * as React from 'react'

const About = () => {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#1A2249]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>Many people think that I am interested in the field of telecommunications because I graduated from a telecommunications program, 
                   but the fact is that I prefer being a programmer. 
                   I was compelled by circumstances as I was stuck in a school that focused on programming, and over time I became more interested in it. 
                   You can call me Jee, a junior Software Engineer who is still learning about programming languages.
                </p>
                <p className='py-2 text-gray-600'>I have a curious nature, especially when it comes to programming. Javascript and Java are programming languages that I find very enjoyable.
                    Although I am still learning, I am not discouraged because the best teacher is time and experience.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src='/assets/pp.jpg' alt='pp' width='1364' height='88' className='rounded-xl' />
            </div>
        </div>
    </div>
  )
}

export default About