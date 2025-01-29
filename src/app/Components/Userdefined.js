import React from 'react'
import { RiPencilLine } from "react-icons/ri";
import Dropdown from './Dropdown';
import { BsArrowDownUp } from "react-icons/bs";


const Userdefined = () => {
  return (
   <div>
    <div className=''>
    <p className='font-bold text-[16px]'> User defined Field</p>
    <div className='flex gap-8 pt-2'>
        <input type='text'  className='w-[156px] h-[24px] bg-[#D9D9D9]'/>
        <RiPencilLine className='w-[17px] h-[17px] text-[#007AFF]' />

    </div>
    {/* 2 */}
    <div className='flex gap-8 pt-2'>
        <input type='text'  className='w-[156px] h-[24px] bg-[#D9D9D9]'/>
        <RiPencilLine className='w-[17px] h-[17px] text-[#007AFF]' />

    </div>
    {/* 3 */}
    <div className='flex gap-8 pt-2'>
        <input type='text'  className='w-[156px] h-[24px] bg-[#D9D9D9]'/>
        <RiPencilLine className='w-[17px] h-[17px] text-[#007AFF]' />
        

    </div>
    </div>
    </div>
  )
}

export default Userdefined