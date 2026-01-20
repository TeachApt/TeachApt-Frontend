import React from 'react'

export default function TestimonialCard() {
  return (
    <div className='relative bg-blue-600 text-white rounded-xl px-8 py-8 max-w-2xl mx-auto text-center'>
        <h3 className='font-semibold text-lg'> Mike John</h3>
        <p className='text-sm opacity-90 mb-4'>Seconday School Student</p>

        <p className='font-semibold mb-3'>TeachApt transformed my career!</p>
        
        <p className='text-sm leading-relaxed opacity-95'>
        I am truly grateful for the support I received while learning how to code.
        The lessons were well-structured and easy to follow, which made the entire
        process less overwhelming. Step by step, I grew more confident and started
        building projects I once thought were too difficult. Today, I’m proud of
        how far I’ve come, and excited for what’s ahead.
        </p>

        <div className="flex justify-center gap-1 mt-4 text-yellow-300">
        ★ ★ ★ ★ ★
      </div>

      <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-blue-600'></div>
    </div>
  )
}

