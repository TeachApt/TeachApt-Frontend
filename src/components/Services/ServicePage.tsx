import React from 'react'
import FeaturedCard from './FeaturedCard'

export default function ServicePage() {
  return (
    <div className="w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

      {/* left items */}
      <div className="flex justify-center">
        <div className="bg-blue-600 rounded-2xl overflow-hidden w-[360px] h-[420px]">
            <img src="" alt="Teacher" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* right content */}
      <div>
        <h2 className='text-3xl font-bold mb-4'>
            What We Do?
        </h2>

        <p className='text-gray-600 max-w-md mb-10'>
            We empower Teachers and Eexpand learning by connecting them with students who need their expertise
        </p>

        <div className="grid grid-cols-1 sm:grid-cols gap-6">
            <FeaturedCard 
              icon=''
              title="teach better"
              description='"Conduct live classes or home tutor, share assignments and track progress, all from one dashboard'
            />

            
            <FeatureCard
              icon="/icons/access.svg"
              title="Access Easily"
              description="Create tests in minutes, auto-grade them and get deep insights into students performance."
            />

            <FeatureCard
              icon="/icons/manage.svg"
              title="Manage Seamlessly"
              description="Automate attendance, fee collection, and many more."
            />

            <FeatureCard
              icon="/icons/engage.svg"
              title="Engage Everyone"
              description="Keep parents, students, and teachers connected with real-time updates and reports."
            />
        </div>


      </div>
    </div>
  )
}
