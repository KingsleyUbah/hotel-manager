const NewsLetter = () => {
    return (
      <section className='container mx-auto px-4'>
        <form className='bg-primary px-4 rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-24'>
          
          <h6 className='md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center text-white dark:text-white'>
            Sign Up for Our Newsletter
          </h6>
  
          <div className='flex-col justify-center w-full md:flex-row flex pt-12'>
            <input
              type='email'
              placeholder='Your email (e.g, example@gmail.com)'
              className='bg-white h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] dark:text-black focus:outline-none'
            />
            <button type='button' className='p-4 rounded-lg bg-tertiary-light dark:text-black'>
              Subscribe
            </button>
          </div>
        </form>
      </section>
    );
  };
  
  export default NewsLetter;