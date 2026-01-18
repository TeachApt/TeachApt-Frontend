import React from 'react'
import CourseCard from './CourseCard'

const courses = [
  {
    title: 'Foundation of Graphic Design',
    coverImage: '/Courses/unsplash_P-t_ABQlPxY.png',
    icon1: '/Icons/calendar.svg',
    icon2: '/Icons/lesson.svg',
    duration: '3 months',
    lessons: '30 lessons'
  },
   {
    title: 'Foundation UI/UX Design',
    coverImage: '/Courses/ui_ux.png',
    icon1: '/Icons/calendar.svg',
    icon2: '/Icons/lesson.svg',
    duration: '6 hours',
    lessons: '12 lessons'
  },
   {
    title: 'Foundation Java Script',
    coverImage: '/Courses/javascript.png',
    icon1: '/Icons/calendar.svg',
    icon2: '/Icons/lesson.svg',
    duration: '3 months',
    lessons: '12 lessons'
  },
   {
    title: 'English Language',
    coverImage: '/Courses/English.png',
    icon1: '/Icons/calendar.svg',
    icon2: '/Icons/lesson.svg',
    duration: '6 hours',
    lessons: '12 lessons'
  },
   {
    title: 'Mathematics',
    coverImage: '/Courses/Mathematics.png',
    icon1: '/Icons/calendar.svg',
    icon2: '/Icons/lesson.svg',
    duration: '6 hours',
    lessons: '12 lessons'
  },
   {
    title: 'Biology',
    coverImage: '/Courses/science.png',
    icon1: '/Icons/calendar.svg',
    icon2: '/Icons/lesson.svg',
    duration: '6 hours',
    lessons: '12 lessons'
  }

]
export default function ExploreCourses() {
  return (
    <section className='p-6 md:p-16 bg-white'>
      <div className='max-w-full '>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 text-blue-600">
          <h2 className='text-3xl font-bold mb-4 text-blue-600'>Explore Our Courses</h2>

          <button className=' px-4 py-2 text-md w-fit border border-blue-600 rounded-md'>View All </button>
          <button className=' px-4 py-2 text-md w-fit border border-blue-600 rounded-md'>View Trending </button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {courses.map((course, index)=> (
          <CourseCard
            key={index}
            title={course.title}
            coverImage={course.coverImage}
            icon1={course.icon1}
            icon2={course.icon2}
            duration={course.duration}
            lessons={course.lessons}
          />
        ))}
      </div>
    </section>
    
  )
}
