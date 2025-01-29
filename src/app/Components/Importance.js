import React from 'react'
import Dropdown from './Dropdown';
import { BsArrowDownUp } from "react-icons/bs";

const Importance = () => {
  return (
    <div>
    <div className='flex gap-2'> 
        <h1 className='text-[16px] font-bold'>Importance</h1>
        <BsArrowDownUp className='mt-1 text-[16px] font-bold' />
    </div>
    {/* 1 */}
    <div className='flex  gap-2 pt-2'>
    <p className='text-[16px]'>Role critical </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 2 */}
    <div className='flex  gap-1 pt-2'>
    <p className='text-[16px]'>Nice to have </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 3 */}
    <div className='flex  gap-1 pt-2'>
    <p className='text-[16px]'>Nice to have </p>
    < Dropdown className='mt-1'/>
    </div>
    
    </div>
  )
}

export default Importance