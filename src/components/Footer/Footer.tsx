import Link from 'next/link'
import {BsTwitter, BsFacebook, BsWhatsapp, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="mt-16 py-12">
            <div className="container mx-auto px-4">
                
                <div className="flex flex-wrap gap-16 justify-between">
                    <div className="flex-1">        
                        <Link href="/" className='mb-4 block font-bold text-tertiary-dark'>
                            Hotelzz
                        </Link>                
                        <p>Get the best hotel rooms you can find. Luxury, Basic, you name it!</p>
                        <div className="flex flex-row items-start py-4">
                            <div className='mr-4'>
                                <BsLinkedin />
                            </div>
                            <div className='mr-4'>
                                <BsFacebook />
                            </div>
                            <div className='mr-4'>
                                <BsTwitter />
                            </div>
                            <div className='mr-4'>
                                <BsWhatsapp />
                            </div>
                        </div>  
                    </div>

                    <div className="flex-1 md:text-right">
                        <ul>
                            <li className='hover:underline duration-500 transition-all pb-4'>
                                <Link href="/" className='text-tertiary-dark font-bold'>
                                    About us
                                </Link>             
                            </li>
                            <li className="hover:underline duration-500 transition-all pb-4">
                                <Link href="/">Our Mission Statement</Link>
                            </li>                                
                            <li className="hover:underline duration-500 transition-all pb-4">
                                <Link href="/">Our Privacy Commitment</Link>
                            </li>                                
                            <li className=" hover:underline duration-500 transition-all pb-4">
                                <Link href="/">Terms of Service</Link>
                            </li>                                
                        </ul>                        
                    </div>

                    <div className='flex-1 md:text-right'>
                        <ul>
                            <li className='hover:underline duration-500 transition-all pb-4'>
                                <Link href="/" className='text-tertiary-dark font-bold'>
                                    Resources
                                </Link>             
                            </li>
                            <li className="hover:underline duration-500 transition-all pb-4">
                                <Link href="/">Blog</Link>
                            </li>                                
                            <li className="hover:underline duration-500 transition-all pb-4">
                                <Link href="/">Our Mission</Link>
                            </li>                                
                            <li className=" hover:underline duration-500 transition-all pb-4">
                                <Link href="/">FAQ</Link>
                            </li>                                
                        </ul>                           
                    </div>                
                </div>
            </div>
        </footer>        
    )
}

export default Footer