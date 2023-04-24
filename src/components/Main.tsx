import * as React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaCloudDownloadAlt, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>let&apos;s build something together</p>
                <h1 className='py-4 text-gray-700'>
                    HI I&apos;m 
                    <span className='text-[#070A52]'>&nbsp;Kojaydev</span>
                </h1>

                <h1 className='py-1 text-gray-700'>
                    A Software Engineer
                </h1>

                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Talented software development professional with experience in Web and Mobile applications. 
                Consistent in delivering clean, error-free, reliable code to meet current or expected needs. 
                Well-versed in software trends and confident in multiple languages, frameworks and programming tools.
                </p>

                <div className='py-4'>
                    <button onClick={() => alert('wait...')} className='bg-indigo-500 shadow-lg shadow-indigo-500/50 justify-center items-center p-3 hover:scale-105 ease-in duration-300'>
                        <div className='flex items-center'>
                        <FaCloudDownloadAlt />
                        <p className='text-white font-semi-bold ml-2'>Download Resume</p>
                        </div>
                    </button>
                </div>

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-indigo-500/50 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>

                    <div className='rounded-full shadow-lg shadow-indigo-500/50 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                    </div>

                    <div className='rounded-full shadow-lg shadow-indigo-500/50 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>

                    <div className='rounded-full shadow-lg shadow-indigo-500/50 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main