import React from 'react'
import { useNavigate } from 'react-router'

const CourseName = ({courseName, courseLink}) => {
  const navigate= useNavigate();
  return (
    <div>
      <button onClick={()=>{navigate(`/${courseLink}`)}}>{courseName}</button>

    </div>
  )
}

export default CourseName
