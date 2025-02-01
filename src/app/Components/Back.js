import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Dropdown from './Dropdown';

const Back = () => {
  return (
    <div className='container mx-auto px-4 pt-12'>
      <div className='w-full max-w-[878px]'>
        <div className='flex gap-2'>
          <IoArrowBack className='mt-1' />
          <h1 className='text-[16px] font-bold'>Back</h1>
        </div>
        <div className='flex justify-end mx-4'>
          <RxCross2 className='w-[18px] h-[18px]' />
        </div>

        <p className='pt-6 text-[24px] font-bold px-3'>Select the existing profile to align your Job Ad with</p>

        {/* Buttons */}
        <div className='flex gap-3'>
          <div className=' w-[268px] h-[47px] bg-[#007AFF] rounded-[10px] flex items-center justify-center mt-6'>
            <button className='text-white text-[16px] font-semibold'>Select Skills Portfolio</button>
          </div>
          <h1 className='pt-8 lg:text-[24px] text-[20px] font-bold'>OR</h1>
          <div className=' w-[268px] h-[47px] bg-[#007AFF] rounded-[8px] flex items-center justify-center mt-6'>
            <button className='text-white text-[16px] font-semibold'>Select Leadership Personal</button>
          </div>
        </div>

        <p className='text-[16px] font-semibold pt-6'>
          Don’t have an existing profile? <span className='text-[#007AFF]'>click here to begin</span>
        </p>

        {/* Refinement Criteria */}
        <div className='border-2 border-[#000000] rounded-[8px] w-full mt-6'>
          <p className='text-[16px] font-bold pt-4 text-[#007AFF] px-4'>Role-specific Refinement Criteria (optional)</p>
          <p className='text-[14px] pt-4 font-semibold px-4'>
            Tailor job ads with inputs like function, industry, team size, and reporting.
          </p>

          {/* Form */}
          <div className='flex gap-3 px-4 pt-4 flex-wrap'>
            <div className='w-full sm:w-[268px]'>
              <label className='text-[14px] font-semibold'>Job Reference Number</label><br />
              <input type='text' className='w-full h-[47px] border-2 rounded-[9px] mt-3' />
            </div>
            <div className='w-full sm:w-[268px]'>
              <label className='text-[14px] font-semibold'>Position Name</label><br />
              <input type='text' className='w-full h-[47px] border-2 rounded-[9px] mt-2' />
            </div>
            <div className='w-full sm:w-[268px]'>
              <label className='text-[14px] font-semibold'>Number of Positions</label><br />
              <div className='flex justify-between w-full h-[47px] border-2 rounded-[9px] mt-3'>
                <input type='text' className='w-full' />
                <div className='mt-2 text-2xl px-2'>
                  <Dropdown className='text-[2xl] mt-2' />
                </div>
              </div>
            </div>
          </div>

          {/* More Form Fields */}
          <div className='flex gap-3 px-4 pt-4 flex-wrap'>
            <div className='w-full sm:w-[268px]'>
              <label className='text-[14px] font-semibold'>Number of Direct Reports</label><br />
              <input type='text' className='w-full h-[47px] border-2 rounded-[9px] mt-3' />
            </div>
            <div className='w-full sm:w-[268px]'>
              <label className='text-[14px] font-semibold'>Role Type</label><br />
              <input type='text' className='w-full h-[47px] border-2 rounded-[9px] mt-3' />
            </div>
            <div className='w-full sm:w-[268px]'>
              <label className='text-[14px] font-semibold'>Reporting Structure</label><br />
              <div className='flex justify-between w-full h-[47px] border-2 rounded-[9px] mt-3'>
                <input type='text' className='w-full' />
                <div className='mt-2 text-2xl px-2'>
                  <Dropdown className='text-[2xl] mt-2' />
                </div>
              </div>
            </div>
          </div>

          {/* Final Form Fields */}
          <div className='flex gap-3 px-4 pt-12 flex-wrap'>
            <div className='w-full sm:w-[268px]'>
              <label className='text-[14px] font-semibold text-lg'>Team Department</label><br />
              <input type='text' className='w-full h-[47px] border-2 rounded-[9px] mt-3' />
            </div>
            <div className='w-full sm:w-[268px]'>
              <label className='text-[14px] font-semibold text-lg'>Job Function</label><br />
              <input type='text' className='w-full h-[47px] border-2 rounded-[9px] mt-3' />
            </div>
            <div className='w-full sm:w-[268px]'>
              <label className='text-[14px]  font-bold text-lg'>Industry</label><br />
              <div className='flex justify-between w-full h-[47px] border-2 rounded-[9px] mt-3'>
                <input type='text' className='w-full' />
                <div className='mt-2 text-2xl px-2'>
                  <Dropdown className='text-[2xl] mt-2 ' />
                </div>
              </div>
            </div>
          </div>

          {/* Preview Button */}
          <div className="mt-3 flex justify-end px-8 pt-8 pb-6">
            <button className="w-full sm:w-[143px] h-[47px] bg-[#007AFF] flex items-center justify-center rounded-[8px] text-white">
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Back;
