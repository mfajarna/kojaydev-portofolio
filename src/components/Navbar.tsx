
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { useRouter } from 'next/router'

const Navbar = () => {
    const[nav, setNav] = React.useState<boolean>(false);
    const[shadow, setShadow] = React.useState<boolean>(false);
    const[navBg, setNavBg] = React.useState<string>('#ecf0f3');
    const[linkColor, setLinkColor] = React.useState<string>('#1f2937');
    const router = useRouter();

    React.useEffect(() => {
        if(
            router.asPath === '/property'
        ){
            setNavBg('transparent');
            setLinkColor('#ecf0f3');
        }else{
            setNavBg('#ecf0f3');
            setLinkColor('#1f2937');
        }
    }, [router])

    const handleClickNav = () => {
        setNav(!nav);
    }

    React.useEffect(() => {
        const handleShadow = () => window.scrollY ? setShadow(true) : setShadow(false);

        window.addEventListener('scroll', handleShadow);
    }, [])
    
  return (
    <div style={{ backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20  z-[100]'}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
           <Image src="/assets/logoBrand.png" alt="/" width='125' height='50' />
           <div className='px-5'>
                <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>

                    <Link href="/#about">
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>

                    <Link href="/#skills">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>

                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Blog</li>
                    </Link>

                    <Link href="/#projects">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>

                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>

                <div onClick={handleClickNav} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
           </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={
                nav 
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                <div>
                    <div className='flex w-full items-center justify-between'>
                    <Image src="/assets/logoBrand.png" alt="/" width='87' height='35' />
                        <div onClick={handleClickNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w[90%] py-4'> Lets build something together</p>
                    </div>
                </div>

                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href="/">
                            <li className='py-4 text-sm'>Home</li>
                        </Link>

                        <Link href="/">
                            <li className='py-4 text-sm'>About</li>
                        </Link>

                        <Link href="/">
                            <li className='py-4 text-sm'>Skills</li>
                        </Link>

                        <Link href="/">
                            <li className='py-4 text-sm'>Blog</li>
                        </Link>

                        <Link href="/">
                            <li className='py-4 text-sm'>Projects</li>
                        </Link>

                        <Link href="/">
                            <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Lets Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar