import React from 'react'

export default function Hero() {
  return (
    <div>
        <section className='w-full bg-[#96C0FF] h-[500px] relative overflow-hidden  '>
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
         <div>
          
         </div>
          </div>
        </section>
    </div>
  )
}
