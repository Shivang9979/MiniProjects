import React from 'react'

export const Spinner = () => {
  return (
    <div className='flex-column  gap-6 ml-[45em] mt-[15em] '>
      <div className="loader ml-[20px]"></div>
      <p  className="font-bold text-2xl mt-3">Loading...</p>
    </div>
  )
}
