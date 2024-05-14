import React from 'react'
import { Card } from './Card';
import { useState } from 'react'

export const Cards = (props) => {
  const [Likes, setLikes] = useState([])
  let Courses = props.Courses
  let Category = props.Category
  console.log(Courses)
  function getCourses() {
    if (Category === "All") {
      let allCourses = [];
      Object.values(Courses).forEach(array => {
        array.forEach((coursesData) => {
          allCourses.push(coursesData)
        })
      })
      return allCourses;

    }
    else{
      return Courses[Category]
    }

  }
  return (
    <div className=' flex justify-center items-center flex-wrap bg-[#57534e] w-max-[1200px] py-6 mx-auto   gap-8'>{
      getCourses().map((course) => (
        <Card key={course.id} course={course} setLikes={setLikes} Likes={Likes}></Card>

      ))}
    </div>
  )
}
