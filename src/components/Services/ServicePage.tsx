import React from 'react'
import FeaturedCard from './FeaturedCard'
import HowItWorks from './HowItWorks'

export default function ServicePage() {
  return (
    <section className="w-full bg-white mx-auto p-10">
        <h2 className='text-3xl font-bold mb-4 px-8 text-black'>
            What We Do?
        </h2>

        <p className='text-black max-w-lg mb-4 px-8'>
            We empower Teachers and Eexpand learning by connecting them with students who need their expertise
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">

     
      {/* left items */}
      <div className="flex items-start px-8">
        
        <div className="bg-blue-600 rounded-2xl overflow-hidden w-[380px] h-[380px] ">
            <img src="/teacher.png" alt="Teacher" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* right content */}
      <div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 px-8 gap-8 pr-8">
            <FeaturedCard 
              icon='/teach.png'
              title="Teach better"
              description='"Conduct live classes or home tutor, share assignments and track progress, all from one dashboard'
            />

            
            <FeaturedCard
              icon="/access.png"
              title="Access Easily"
              description="Create tests in minutes, auto-grade them and get deep insights into students performance."
              
            />

            <FeaturedCard
              icon="/manage.png"
              title="Manage Seamlessly"
              description="Automate attendance, fee collection, and many more."
            />

            <FeaturedCard
              icon="/engage.png"
              title="Engage Everyone"
              description="Keep parents, students, and teachers connected with real-time updates and reports."
            />
        </div>

    
      </div>
    </div>

     {/* bottom content */}
    <div className='mt-20'>
      <HowItWorks />
    </div>
  </section>
  )
}
