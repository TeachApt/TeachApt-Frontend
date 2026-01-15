import Image from 'next/image';
import React from 'react'

type CategoryCardProps = {
    title: string;
    coverImage: string;
    icon1: string;
    icon2: string;
    duration: string;
    lessons: string;

}

export default function CourseCard({ title, coverImage, icon1, icon2, duration, lessons }: CategoryCardProps) {
  return (
    <div className='border rounded-xl flex flex-col  gap-4 hover:shadow-md-transition'>
        <Image
        src={coverImage}
        alt='coverImage'
        width={450}
        height={300}
        className='object-cover w-full h-full rounded-t-xl'
         />
     <div className='p-6 text-black '>
        <h3 className='text-lg font-semibold text-[#E36914] text-center mx-auto mb-4'>{title}</h3>
        <div className='flex items-start gap-2 mb-4'>
            <Image src={icon1} alt='icon' width={20} height={20} />
            <span>{duration}</span>
        </div>

        <div className='flex items-start gap-2'>
            <Image src={icon2} alt='icon' width={20} height={20} />
            <span>{lessons}</span>
        </div>

        
     </div>
     <button className='w-full px-4 py-2 bg-blue-600 text-white rounded-b-md hover:bg-[#d05a0d] transition-colors'>Enrol Now</button>
    </div>
  )
}
