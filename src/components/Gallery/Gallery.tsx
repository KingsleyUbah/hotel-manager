'use client'

import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FC } from 'react';
import Link from 'next/link';

type Props = {
  className: string;
  style: React.CSSProperties;
  onClick: () => void;
}

const SamplePrevArrow: FC<Props> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: '5px'}}
      onClick={onClick}
    />
  );
}

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,    
  };

  return (
    <section className='mb-14'>      
      <p className='md:font-semibold text-lg md:text-2xl text-center mb-3'>
          Explore Our Rooms
      </p>      
      <div className='mx-auto container h-full relative'>            
        <Slider {...settings}>
          <div className='w-32 h-56'>
            <Image
                alt='gallery'
                className='img'
                src='/images/hero-1.jpg'
                width={200}
                height={200}
            />
          </div>
          <div className='w-32 h-56'>
          <Image
                alt='gallery'
                className='img'
                src='/images/hero-2.jpg'
                width={200}
                height={200}
            />
          </div>
          <div className='w-32 h-56'>
          <Image
                alt='gallery'
                className='img'
                src='/images/hero-3.jpg'
                width={200}
                height={200}
            />
          </div>
          <div className='w-32 h-56'>
          <Image
                alt='gallery'
                className='img'
                src='/images/hero-4.jpg'
                width={200}
                height={200}
            />
          </div>
          <div className='w-32 h-56'>
          <Image
                alt='gallery'
                className='img'
                src='/images/hero-5.jpg'
                width={200}
                height={200}
            />
          </div>
          <div className='w-32 h-56'>
          <Image
                alt='gallery'
                className='img'
                src='/images/hero-6.jpg'
                width={200}
                height={200}
            />
          </div>
          <div className='w-32 h-56'>
          <Image
                alt='gallery'
                className='img'
                src='/images/hero-7.jpg'
                width={200}
                height={200}
            />
          </div>
          <div className='w-32 h-56'>
          <Image
                alt='gallery'
                className='img'
                src='/images/hero-8.jpg'
                width={200}
                height={200}
            />
          </div>
        </Slider>      

        <div className="bg-[#494949] px-4 py-4" style={{position: 'absolute', height: '180px', width: '180px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '3px'}}>
          <h3 className='text-white text-base mb-2'>The best rooms you can find</h3>
          <p className='text-xs text-white'>Explore our wide collection of rooms. Pick the best for you and your loved ones.</p>
          <div className='mt-2 flex flex-col'>          
            {/* <button className="btn px-2 text-sm py-1 rounded-md bg-secondary self-end dark:text-black">Explore</button> */}
            <Link
              href={'/rooms'}
              className='text-center bg-tertiary-light inline text-sm self-end px-2 py-1 rounded-lg'
            >
            Explore
          </Link>
          </div>                
        </div>
      </div>    
    </section>
  );
};

export default Gallery;