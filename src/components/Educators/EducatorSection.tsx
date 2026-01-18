import React from 'react'
import EducatorCard from './EducatorCard'

const Educator = [
    {
        TeacherName: 'Oladipo Mike',
        coverImage: '/Courses/Male teacher.png',
        discipline: 'Mathematics Teacher',
        Experience: 'Years of experience: 3yrs.'
    },
    {
        TeacherName: 'Catherine Zeta',
        coverImage: '/Courses/female Teacher1.png',
        discipline: 'English Language Teacher',
        Experience: 'Years of experience: 5yrs.'
    },
    {
        TeacherName: 'Mary Peter',
        coverImage: '/Courses/female Teacher2.png',
        discipline: 'Biology Teacher',
        Experience: 'Years of experience: 4yrs.'
    },
]
export default function EducatorSection() {
    return (
        <section className='p-20 max-w-full bg-white'>

            <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4'>
                <div>
                   <h2 className='text-3xl font-bold text-start text-blue-600'>Meet Our Expert Educators</h2>
                    <p className='text-black'>Instructors guiding your academic and career success. </p>
                </div>

                <div className='flex gap-3'>
                    <button className='bg-white text-black px-4 py-2 rounded hover:bg-blue-700 outline  outline-blue-600 text-sm'>Filter</button>
                    <button className='bg-white text-black px-4 py-2 rounded hover:bg-blue-700 outline  outline-blue-600 text-sm'>View All Teachers</button>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                {Educator.map((educator, index) => (
                    <EducatorCard
                        key={index}
                        TeacherName={educator.TeacherName}
                        coverImage={educator.coverImage}
                        discipline={educator.discipline}
                        Experience={educator.Experience}
                    />
                ))}
            </div>
        </section>
    )
}
