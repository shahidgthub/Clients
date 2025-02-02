import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineQuestionMark } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
import { Advisory, Conditates, Optimiziblejob } from '../../../public/icons/icons';
import Dropdown from './Dropdown';
import RequirdSkill from './RequirdSkill';
import Capatency from './Capatency';
import Category from './Category';
import Importance from './Importance';
import Userdefined from './Userdefined';

const Home = () => {
  return (
    <div className='container mx-auto px-2 pt-6'>
        <h1 className='text-[#007AFF] lg:text-[24px] text-[18px] font-bold'>Review Skill Portfolio for the Role of Business Analyst
</h1>
<p className='text-[16px] pt-1'>Review and refine the AI-extracted skills list to match your role’s needs.</p>
<div className='flex justify-between pt-8 lg:flex-nowrap flex-wrap'>
    <div>
        <p className='text-[16px]'>Below is the list of skills extracted based on your job description. Refine
         the list to ensure relevance to<br/> the role.</p>
    </div>
    {/* Right */}
    <div>
        <div className='flex  lg:gap-[15px] gap-[8px]'>
    <div className="w-[24px] h-[24px] bg-[rgb(161,159,159)] rounded-full  mt-2 flex items-center justify-center">
      <MdOutlineQuestionMark className="text-white text-sm" />
    </div>

{/* button */}
<div className='bg-[#007AFF]  w-[210px] h-[38px] flex gap-1 lg:flex-nowrap flex-wrap rounded px-3 py-2'>
    <button className='text-white text-[13px] font-semibold'>
      Assign Competency Level
     
    </button>
    <div className='text-white mt-'>
    <Dropdown className="" />

    </div>
    </div>
    {/* 2button */}
    <div className='bg-[#FF4242] flex px-6 py- w-[111px] h-[38px] rounded'>
    <MdOutlineDelete  className='text-white w-[16px] h-[17px] mt-3'/>
        <button className='text-white text-[13px] mt-1'>Delete</button>
    </div>
   </div>
   {/* addSkill */}
   <div className="mt-3 flex justify-end">
  <button className="w-[114px] h-[39px] bg-[#007AFF] flex items-center justify-center rounded text-white">
    AddSkill
  </button>
</div>
  
    </div>

</div>
<input type='text' placeholder='Search Skills' className='lg:w-[428px] h-[47px] border-2 rounded-[8px] -mt-5 px-4 '/>
{/* 2nd Requird Skll */}
<div className='bg-[#F3F3F3] mt-6 rounded-[8px] px-7 pt-5 pb-20'>
    {/* Parent */}
    <div className='flex justify-between  overflow-x-auto w-full h-[200px] overflow-y-8'>
        {/* 1 */}
        <div>
    <div className='flex gap-2 px-12'> 
        <h1 className='text-[16px] font-bold'>Requird skill</h1>
        <BsArrowDownUp className='mt-1 text-[16px] font-bold' />
    </div>
    {/* 1 */}
    <div className='flex gap-8 pt-3'>
    <input type='checkbox'/><p className='text-[16px] font-semibold'>Communication Skills </p>
    </div>
    {/* 2 */}
    <div className='flex gap-8 pt-2 '>
    <input type='checkbox'/><p className='text-16px font-semibold'>Project Management </p>
    </div>
    {/* 3 */}
    <div className='flex gap-8 pt-2'>
    <input type='checkbox'/><p className='text-[16px] font-semibold'>Analytical Thinking  </p>
    </div>
    </div>
        
      {/* <RequirdSkill/> */}
    {/* 2Categorylevel */}
    {/* <Capatency/> */}
    <div>
    <div className='flex gap-2'> 
        <h1 className='text-[16px] font-bold '>Competency Level</h1>
        <BsArrowDownUp className='mt-1 text-[16px] font-bold' />
    </div>
    {/* 1 */}
    <div className='flex  gap-2 pt-2'>
    <p className='text-[16px] font-semibold'>Beginner </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 2 */}
    <div className='flex  gap-2 pt-2'>
    <p className='text-[16px] font-semibold'>Beginner </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 3 */}
    <div className='flex  gap-2 pt-2'>
    <p className='text-[16px] font-semibold'>Beginner </p>
    < Dropdown className='mt-1'/>
    </div>
    </div>
    {/* 3Category */}
    {/* <Category/> */}
    <div>
    <div className='flex gap-24'> 
        <h1 className='text-[16px] font-bold'>Category</h1>
        <BsArrowDownUp className='mt-1 text-[16px] font-bold' />
    </div>
    {/* 1 */}
    <div className='flex  gap-14 pt-2'>
    <p className='text-[16px] font-semibold'>Technical Skills </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 2 */}
    <div className='flex  gap-24 pt-2'>
    <p className='text-[16px] font-semibold'>Soft Skills </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 3 */}
    <div className='flex  gap-14 pt-2'>
    <p className='text-[16px] font-semibold'>Technical Skills </p>
    < Dropdown className='mt-1'/>
    </div>
    

    </div>
    {/* 4Importance */}
    {/* <Importance/> */}
    <div>
    <div className='flex gap-2'> 
        <h1 className='text-[16px] font-bold'>Importance</h1>
        <BsArrowDownUp className='mt-1 text-[16px] font-bold' />
    </div>
    {/* 1 */}
    <div className='flex  gap-2 pt-2'>
    <p className='text-[16px] font-semibold'>Role critical </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 2 */}
    <div className='flex  gap-1 pt-2'>
    <p className='text-[16px] font-semibold'>Nice to have </p>
    < Dropdown className='mt-1'/>
    </div>
    {/* 3 */}
    <div className='flex  gap-1 pt-2'>
    <p className='text-[16px] font-semibold'>Nice to have </p>
    < Dropdown className='mt-1'/>
    </div>
    
    </div>
    {/* User defined Field */}
    
    {/* <Userdefined/> */}
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

    </div>
    
    
    
    
    


</div>
{/* Save */}
<div className="mt-4 flex justify-end">
<div className='bg-[#007AFF]  w-[114px] h-[39px] flex gap-1 rounded px-6 py-2'>
    <button className='text-white text-[16px]'>
      Save
     
    </button>
    <div className='text-white mt-1'>
    <Dropdown className="" />

    </div>
    </div>
</div>
{/* LAst Advisory Notes */}
<div className='flex gap-2 '>
    <Advisory/>
<h1 className='text-[20px] font-bold italic'>Advisory Notes</h1>

</div>
{/* Optimiziblejob */}

<div className='flex gap-4 pt-6 lg:flex-nowrap flex-wrap lg:justify-start justify-center'>
    {/* 1 */}
    <div className='lg:w-[486px]  md:w-[470px] w-[370px]  bg-[#FFFFFF] border  px-3 pt-3 pb-6 rounded-[8px]'>
    <Optimiziblejob/>
    <h1 className='font-bold text-[20px] pt-2'>Optimize Job Ad (Optional)</h1>
    <p className='pt-2'>We help you craft job descriptions that line up to your<br/> Job Target Leadership Persona and Skills Portfolio</p>
    <div className='w-[212px] h-[47px] bg-[#007AFF] rounded-[8px] flex items-center justify-center mt-6 '>
  <button className='text-white'>Optimize Job Ad</button>
</div>

    </div>
    {/* 2 */}
    <div className='lg:w-[486px] md:w-[470px] w-[370px]  bg-[#FFFFFF] border  px-3 pt-3 pb-6 rounded-[8px]'>
<Conditates/>
    <h1 className='font-bold text-[20px] pt-2'>Invite Candidates for Skill Self-Assessment</h1>
    <p className='pt-2'>Send an invite to Candidates to see if their skills<br/> competency align with the role requirements.</p>
    <div className='w-[212px] h-[47px] bg-[#007AFF] rounded-[8px] flex items-center justify-center mt-6 '>
  <button className='text-white'>Invite Candidates </button>
</div>

    </div>
</div>
{/* back */}
<div className="mt-8 flex border-t-2 pt-6">
  <button className="w-[114px] h-[39px] bg-[#DFDFDF] flex items-center justify-center rounded font-bold">
 Back
  </button>
</div>


        </div>
  )
}

export default Home