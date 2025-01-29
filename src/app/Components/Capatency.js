import React from 'react'
import Dropdown from './Dropdown';
import { BsArrowDownUp } from "react-icons/bs";

const Capatency = () => {
  return (
    <div>
    <div className='flex gap-2'> 
        <h1 className='text-[16px] font-bold'>Competency Level</h1>
        <BsArrowDownUp className='mt-1 text-[16px] font-bold' />
    </div>
    {/* 1 */}
    <div className='flex  gap-2 pt-2'>
    <p className='text-[16px]'>Beginner </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 2 */}
    <div className='flex  gap-2 pt-2'>
    <p className='text-[16px]'>Beginner </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 3 */}
    <div className='flex  gap-2 pt-2'>
    <p className='text-[16px]'>Beginner </p>
    < Dropdown className='mt-1'/>
    </div>
    </div>
  )
}

export default Capatency