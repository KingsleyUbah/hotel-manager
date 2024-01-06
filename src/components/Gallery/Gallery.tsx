'use client'

import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div className='mx-auto container py-14 h-full relative'>      
      <Slider {...settings}>
        <div>
          <Image
              alt='gallery'
              className='img'
              src='/images/hero-1.jpeg'
              width={200}
              height={200}
          />
        </div>
        <div>
        <Image
              alt='gallery'
              className='img'
              src='/images/hero-2.jpeg'
              width={200}
              height={200}
          />
        </div>
        <div>
        <Image
              alt='gallery'
              className='img'
              src='/images/hero-1.jpeg'
              width={200}
              height={200}
          />
        </div>
        <div>
        <Image
              alt='gallery'
              className='img'
              src='/images/hero-2.jpeg'
              width={200}
              height={200}
          />
        </div>
        <div>
        <Image
              alt='gallery'
              className='img'
              src='/images/hero-1.jpeg'
              width={200}
              height={200}
          />
        </div>
        <div>
        <Image
              alt='gallery'
              className='img'
              src='/images/hero-2.jpeg'
              width={200}
              height={200}
          />
        </div>
        <div>
        <Image
              alt='gallery'
              className='img'
              src='/images/hero-1.jpeg'
              width={200}
              height={200}
          />
        </div>
        <div>
        <Image
              alt='gallery'
              className='img'
              src='/images/hero-2.jpeg'
              width={200}
              height={200}
          />
        </div>
      </Slider>      

      <div className="bg-[#494949] px-4 py-2" style={{position: 'absolute', height: '180px', width: '180px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '3px'}}>
        <h3 className='font-medium text-white text-sm mb-2'>Best rooms you can find</h3>
        <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className="btn px-2 py-1 rounded-md bg-secondary">Search</button>
      </div>
    </div>    
  );
};

export default Gallery;