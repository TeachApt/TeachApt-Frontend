import React from 'react'
import Image from "next/image";

export default function Hero() {
  return (
    <div>
        <section className='w-full bg-blue-200  h-[500px] relative overflow-hidden  '>
            <div className='mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-black'>

              <div>
                  <h2 className='text-3xl md:text-4xl font-bold leading-tight'> Let <span className="text-blue-600">TeachAPT</span> Tutors Unlock
            <br /> Your Child’s Potential!</h2>

            <p className='mt-6 max-w-lg'>
              Our dedicated tutors don’t just teach; they inspire,
            mentor, and nurture each learner to bring out
            the very best in them.
            </p>

            <div className='mt-8 flex gap-4'>
              <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition'> Get Started </button>

              <button className='bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition'>  Become a Tutor </button>
            </div>
          </div>
         
         {/* image part */}
         <div className='relative flex justify-center'>
           <Image alt='student learning'
           src={"/student.png"}
           width={400}
           height={400}
           className='relative z-10' />
         

         {/* decorative circle */}
         <div className='absolute '>
                  <Image alt='decorative circle'
           src={"/hero.png"}
           width={600}
           height={500}
           className='mt-30'
            /> 
         </div>

         <div className="w-[545px] mx-auto bg-white shadow-md px-8 py-1 mt-75 absolute z-20 justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center text-center">
          <div className='text-left'>
            <p className="font-bold text-sm">100+</p>
            <p className="text-gray-500 text-sm">Online Courses</p>
          </div>
          <div className='text-left'>
            <p className="font-bold text-sm">50k+</p>
            <p className="text-gray-500 text-sm">Active Students</p>
          </div>
          <div className='text-left'>
            <p className="font-bold text-sm">Lifetime</p>
            <p className="text-gray-500 text-sm">Access</p>
          </div>
        </div>

    </div>
  </div>
</div>
        </section>
    </div>
  )
}
