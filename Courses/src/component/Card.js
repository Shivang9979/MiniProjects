import React from 'react'
import {FcLike} from 'react-icons/fc'
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify'

export const Card = (props) => {
  let course=props.course
  let Likes=props.Likes
  let setLikes=props.setLikes
  const clickHandler=()=>{
    if(Likes.includes(course.id)){
      setLikes((prev)=>prev.filter((cid)=> cid!==course.id))
      toast.warning("Liked Removed")
    }
    else{
      if(Likes.length===0){
        setLikes([course.id]);
      }
      else{
        setLikes((prev)=>[...prev,course.id]);
      }
      toast.success("Liked Successfully");
    }

  }
  return (
    <div className='w-[400px] h-[450px] overflow-hidden flex-col rounded-lg bg-[#1c1917] hover:scale-105  transition transition-all duration-700 hover:outline outline-2 outline-white'>
      <div className='   h-[200px] w-8/10 m-6 '>
          <img className="object-cover h-max w-max"src={course.image.url}  />
      </div>
      <div className='absolute mt-[-3.5rem] ml-[1.2rem] rounded-full bg-white h-[44px] w-[44px] pt-[4px] pl-[4px] '>
        <button onClick={clickHandler}>
        {Likes.includes(course.id) ? (<FcLike size="2.2em"></FcLike>) : (<FcLikePlaceholder size="2.2em"></FcLikePlaceholder>)}
        </button>
      </div>
      <div className='text-white  mx-6'>
        <p className='font-bold text-[23px] '>{course.title}</p>
        <p className='text-[15px] mt-4'>{course.description}</p>
      </div>
    </div>
  )
}
