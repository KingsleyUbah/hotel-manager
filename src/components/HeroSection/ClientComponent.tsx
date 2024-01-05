'use client';

import { FC } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import CountUpNumber from '../CountUpNumber/CountUpNumber';

type Props = {
  heading1: React.ReactNode;
  section2: React.ReactNode;
};

const ClientComponent: FC<Props> = props => {
  const { heading1, section2 } = props;

  return (
    <section className='flex px-4 items-center gap-12 container mx-auto'>
      <div className='py-10 h-full'>
        {heading1}

        <div className='flex justify-between mt-2 mb-8 max-w-100'>
          <div className='flex gap-3 items-end justify-center'>            
            <CountUpNumber duration={5000} endValue={50} />
            <p className='text-sm lg:text-sm'>Basic Rooms</p>
          </div>
          <div className='flex gap-3 items-end justify-center'>        
            <CountUpNumber duration={5000} endValue={120} />
            <p className='text-sm lg:text-sm'>Luxury Rooms</p>
          </div>
          <div className='flex gap-3 items-end justify-center'>            
            <CountUpNumber duration={5000} endValue={60} />
            <p className='text-sm lg:text-sm'>Suites</p>
          </div>
        </div>

        <button className='btn-primary flex items-center justify-around'>      
        <span className='mr-4'>Book Now</span>
          <FaLongArrowAltRight />      
        </button>
      </div>

      {section2}
    </section>
  );
};

export default ClientComponent;