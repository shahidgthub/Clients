import React from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Alert from './Alert';
import Texteditor from './Texteditor';

const Optimize = () => {
  return (
    <div className='container mx-auto px-4 pt-12'>
      <div className='w-full max-w-[878px]'>
        <div className='flex gap-2'>
          <MdOutlineArrowBackIosNew className='text-xl mt-2' />
          <h1 className='text-[#007AFF] text-[24px] font-bold'>
            Optimize Your Job Description
          </h1>
        </div>
        <p className='pt-4 text-[16px] font-semibold'>
          Refine your job ad to align with the ideal skills portfolio and leadership persona. Make precise, thoughtful improvements to attract the right candidates.
        </p>

        <div className='flex justify-between pt-6 flex-wrap gap-4'>
          <div>
            <h1 className='text-[20px] font-bold'>Align with:</h1>
            <div className='flex gap-2 pt-3'>
              <input type='checkbox' />
              <p className='text-[16px] font-semibold'>Skills Portfolio</p>
            </div>
            <div className='flex gap-2 pt-3'>
              <input type='checkbox' />
              <p className='text-[16px] font-semibold'>Ideal Leadership Persona</p>
            </div>
            <div className='flex gap-2 pt-3 items-center'>
              <input type='checkbox' />
              <p className='text-[16px] font-semibold'>Role-Specific Refinement</p>
              <div className='text-[#007AFF]'>
                <Alert />
              </div>
            </div>
          </div>

          {/* Right side buttons */}
          <div className='pt-6'>
            <div className='flex gap-2 flex-wrap'>
              <button className="w-[164px] h-[47px] flex items-center justify-center rounded-[8px] text-[#007AFF] text-[14px] font-semibold border-2">
                Select Criteria
              </button>
              <button className="w-[189px] h-[47px] bg-[#007AFF] flex items-center justify-center  text-[14px] font-semibold rounded-[8px] text-white">
                Optimize the job ad
              </button>
            </div>
          </div>
        </div>

        {/* Text editor section */}
        <div className='border-2 mt-6 overflow-x-auto w-full h-[200px] overflow-y-8'>
  <Texteditor />
</div>

        {/* button */}
        <div className='flex justify-end pt-4'>
        <div className='w-[143px] h-[47px] bg-[#007AFF]  rounded-[8px] flex items-center justify-center'>
          <button className='text-white text-[14px] font-semibold '>Save</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Optimize;
