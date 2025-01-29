import React from 'react'
import { BsArrowDownUp } from "react-icons/bs";

const RequirdSkill = () => {
  return (
    <div>
    <div className='flex gap-2 px-12'> 
        <h1 className='text-[16px] font-bold'>Requird skill</h1>
        <BsArrowDownUp className='mt-1 text-[16px] font-bold' />
    </div>
    {/* 1 */}
    <div className='flex gap-8 pt-3'>
    <input type='checkbox'/><p className='text-[16px]'>Communication Skills </p>
    </div>
    {/* 2 */}
    <div className='flex gap-8 pt-2 '>
    <input type='checkbox'/><p className='text-16px'>Project Management </p>
    </div>
    {/* 3 */}
    <div className='flex gap-8 pt-2'>
    <input type='checkbox'/><p className='text-[16px]'>Analytical Thinking  </p>
    </div>
    </div>
  )
}

export default RequirdSkill