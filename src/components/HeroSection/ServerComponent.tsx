import Image from 'next/image';

export const heading1 = (
  <>
    <h1 className='font-heading mb-6'>Home Of Quality Apartments & Hotel <span className='text-tertiary-light'>Service</span></h1>
    <p className='text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg'>
      Explore our Exquisite Hotels Rooms Equipped With The Best Facilities You Can Find.      
    </p>
  </>
);

export const section2 = (
  <div className='relative'>
    <div className='md:grid hidden gap-8 grid-cols-1'>
      <div className='rounded-2xl overflow-hidden h-48'>
        <Image
          src='/images/hero-1.jpg'
          alt='hero-1'
          width={300}
          height={300}
          className='img scale-animation'
        />
      </div>

      <div className='grid grid-cols-2 gap-8 h-48'>
        <div className='rounded-2xl overflow-hidden'>
          <Image
            src='/images/hero-2.jpg'
            alt='hero-2'
            width={300}
            height={300}
            className='img scale-animation'
          />
        </div>
        <div className='rounded-2xl overflow-hidden'>
          <Image
            src='/images/hero-3.jpg'
            alt='hero-3'
            width={300}
            height={300}
            className='img scale-animation'
          />
        </div>
      </div>    
    </div>
    
    {/* Overlap Image */}
    {/* <div className='absolute md:grid hidden bottom-12 -left-32'>
      <Image
            src='/images/Ratings.png'
            alt='hero-3'       
            height={300}     
            width={300}     
            className='img scale-animation'
        />
    </div> */}
  </div>
);