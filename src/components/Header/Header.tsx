"use client";

import Link from 'next/link'
import {useContext} from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {MdDarkMode, MdOutlineLightMode} from 'react-icons/md'
import ThemeContext from '@/context/themeContext'
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const Header = () => {
    const {darkTheme, setDarkTheme} = useContext(ThemeContext)
    const {data: session} = useSession();

    console.log(session)
    return (
        <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="flex items-center w-full md:2/3">
                <Link href="/" className="font-black">
                    Naij Hotel
                </Link>

                <ul className='flex items-center justify-around font-medium w-full md:w-1/3 ml-20 text-sm'>
                    <li className="hover:underline duration-500 transition-all">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:underline duration-500 transition-all">
                        <Link href="/rooms">Rooms</Link>
                    </li>
                    <li className="hover:underline duration-500 transition-all">
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
            </div>

            <ul className="flex items-center ml-5">
                <li className='flex items-center'>
                    {
                        session?.user ?    (                     
                        <Link href={`/users/${session?.user.id}`}>
                            {session.user.image ? (
                                <div className='bg-tertiary-light px-1 py-1 w-20 flex items-center justify-between rounded-md'>
                                    <span className='text-sm font-medium'>{session.user.name?.substring(0, 5)}...</span>
                                    <div className='w-5 h-5 rounded-full overflow-hidden'>
                                        <Image
                                        src={session.user.image}
                                        alt={session.user.name!}
                                        width={40}
                                        height={40}
                                        className='scale-animation img'
                                        />
                                    </div>
                                </div>
                                ) : (
                                <FaUserCircle className='cursor-pointer' />
                            )}
                        </Link> ) : (
                        <Link href="/auth">
                            <FaUserCircle className="cursor-pointer"/>
                        </Link>
                        )
                    }
                </li>                
                <li className='ml-2'>                    
                    {darkTheme ? 
                        (<MdOutlineLightMode 
                            className="cursor-pointer"
                            onClick={() => {
                                setDarkTheme(false);
                                localStorage.removeItem("hotel-theme")
                            }}
                        />):
                        (<MdDarkMode 
                            className="cursor-pointer"
                            onClick={() => {
                                setDarkTheme(true);
                                localStorage.setItem("hotel-theme", "true")
                            }}
                        />)                            
                    }                    
                </li>                
            </ul>
        </header>
    )
}

export default Header