import React from 'react'

export const FilterData = (props) => {
    const filterData = props.filterData
    const Category=props.Category
    const setCategory=props.setCategory
    const filterHandler=(title)=>{
        setCategory(title)
    }
    return (
        <div className='flex justify-center space-x-5 h-3xl text-2xl bg-[#57534e] pt-6 '>   {
            filterData.map((data) =>

                <button onClick={()=>filterHandler(data.title)} className='p-2 rounded-lg bg-[#1c1917] text-white hover:scale-110 hover:shadow-lg transition-all transition duration-700 hover:outline outline-2 outline-white ' key={data.id}>{data.title}</button>
            )
        }</div>)

}
