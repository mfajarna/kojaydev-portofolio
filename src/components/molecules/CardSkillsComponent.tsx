import Image from 'next/image'
import * as React from 'react'

const CardSkillsComponent = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/typescript.png'
                    width='64'
                    height='64'
                    alt='typescript'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Typescript</h3>
            </div>
        </div>
    </div>

    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/javascript.png'
                    width='64'
                    height='64'
                    alt='javascript'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Javascript</h3>
            </div>
        </div>
    </div>

    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/php.png'
                    width='64'
                    height='64'
                    alt='php'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>PHP</h3>
            </div>
        </div>
    </div>

    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/nodejs.png'
                    width='64'
                    height='64'
                    alt='nodejs'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Node JS</h3>
            </div>
        </div>
    </div>

    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/laravel.png'
                    width='64'
                    height='64'
                    alt='laravel'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Laravel Framework</h3>
            </div>
        </div>
    </div>
    
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/react-native.png'
                    width='64'
                    height='64'
                    alt='rn'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>React Native Framework</h3>
            </div>
        </div>
    </div>
    
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/nextjs.png'
                    width='64'
                    height='64'
                    alt='rn'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>NextJS</h3>
            </div>
        </div>
    </div>
    
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/springboot.png'
                    width='64'
                    height='64'
                    alt='springboot'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Springboot Framework</h3>
            </div>
        </div>
    </div>

    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/mysql.png'
                    width='64'
                    height='64'
                    alt='mysql'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>MySQL</h3>
            </div>
        </div>
    </div>

    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/firebase.png'
                    width='64'
                    height='64'
                    alt='firebase'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
            </div>
        </div>
    </div>

    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/git.png'
                    width='64'
                    height='64'
                    alt='git'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
            </div>
        </div>
    </div>

    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> 
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image
                    src='/assets/publisher.png'
                    width='64'
                    height='64'
                    alt='publisher'
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Google & Apple Publisher</h3>
            </div>
        </div>
    </div>
</div>
  )
}

export default CardSkillsComponent