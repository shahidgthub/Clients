import React from 'react'
import Dropdown from './Dropdown';
import { BsArrowDownUp } from "react-icons/bs";

const Category = () => {
  return (
    <div>
    <div className='flex gap-24'> 
        <h1 className='text-[16px] font-bold'>Category</h1>
        <BsArrowDownUp className='mt-1 text-[16px] font-bold' />
    </div>
    {/* 1 */}
    <div className='flex  gap-14 pt-2'>
    <p className='text-[16px]'>Technical Skills </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 2 */}
    <div className='flex  gap-24 pt-2'>
    <p className='text-[16px]'>Soft Skills </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 3 */}
    <div className='flex  gap-14 pt-2'>
    <p className='text-[16px]'>Technical Skills </p>
    < Dropdown className='mt-1'/>
    </div>
    

    </div>
  )
}

export default Category