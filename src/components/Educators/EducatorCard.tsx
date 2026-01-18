import Image from 'next/image';
import React from 'react'

type EducatorCardProps = {
    TeacherName: string;
    coverImage: string;
    discipline: string;
    Experience: string;
}

export default function EducatorCard({ TeacherName, coverImage, discipline, Experience }: EducatorCardProps) {
  return (
    <div className='max-w-fullbg-white flex flex-col items-center text-center hover:shadow-lg transition-shadow text-white relative'>
              <Image
                src={coverImage}
                alt={TeacherName}
                width={200}
                height={200}
                className='object-cover z-index  w-full h-full rounded-t-xl'
                 />

      <div className='absolute bg-black bottom-0 items-center by-black rounded rounded-tl-3xl rounded-br-3xl
 py-2 px-8'>
        <h3 className='text-xl font-semibold mt-2'>{TeacherName}</h3>
        <p className='text-sm text-gray-300'>{discipline}</p>
        <p className='text-sm text-gray-300'>{Experience}</p>
      </div>
      
    </div>
  )
}
