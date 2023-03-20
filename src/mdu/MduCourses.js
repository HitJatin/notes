import React from 'react'
import courseData from './CoursesData';
import CourseName from '../components/CourseName'

const MduCourses = () => {
  return (
    <>
      <h1>Maharishi Dayanand University</h1>
      {courseData.map((course) => (
        <CourseName courseName={course.CourseName} courseLink={course.link} />
      ))}

    </>
  )
}

export default MduCourses
