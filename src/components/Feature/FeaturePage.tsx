import React from 'react'
import Image from "next/image";

const features = [
  {
    text: "Allow Teachers to monetize their knowledge. Experience seamless learning with cutting edge features designed to keep you engaged and motivated.",
  },
  {
    text: "Allow Teachers to monetize their knowledge beyond traditional school walls.",
  },
  {
    text: "Connect with tutors and peers through seamless communication and collaborative features.",
  },
  {
    text: "Unlock interactive tools that make every lesson simple, enjoyable, and easy to follow.",
  },
]
export default function FeaturePage() {
  return (
    <section className='bg-blue-200 p-16'>
      <div className='max-w-xl mb-8 text-black'>
        <h2 className='text-2xl font-bold'>Features that set{" "} <span className='text-blue-600'>TeachApt</span> apart</h2>

        <p>
          We empower seamless learning by connecting students with the right tutors in both skills and academic subjects.
        </p>
      </div>

      {/* content */}
      <div className='grid grid-cols-1 md:grid-cols-2  gap-16 justify-between items-start'>

      {/* left */}
        <div className='rounded-lg overflow-hidden w-[600] h-[480px] shadow-lg'>
          <Image
            src="/teacher&stud.png"
            alt="teacher and student learning"
            width={600}
            height={480}
            className="object-cover w-full h-full"
          />
        </div>
     

    {/* right content */}
    <div className='relative space-y-7'>
      {features.map((feature, index)=> (
        <div key={index}
        className="bg-white rounded-lg shadow-lg px-6 py-6 max-w-lg text-black"
        style={{
          marginLeft: index % 2 === 0 ? "0px" : "80px"
        }}
        >
         <p className='text-sm leading-relaxed'>{feature.text}</p>

        </div>
      ))}

    </div>
      </div>
    </section>

  )
}
