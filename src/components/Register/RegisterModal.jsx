import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
export default function RegisterModal() {
  const [step, setStep] = useState(1)
  console.log(step);
  return (
    <Modal open={true} classNames={{modal:'lg:w-[1000px] md:w-[700px] px-[100px]'}}>
      <h1 className='font-playfair font-[700] text-[20px] text-secondary'>The easiest way to reach new customers </h1>
      <span>Step {step}/3</span>
      <div className='flex w-full'>
        <div className='w-[33.3%] h-[6px] bg-primary'></div>
        <div className={`w-[33.3%] h-[6px] ${step > 1 ? 'bg-primary' : 'bg-[#EFEFEF]'}`}></div>
        <div className={`w-[33.3%] h-[6px] ${step > 2 ? 'bg-primary' : 'bg-[#EFEFEF]'}`}></div>
      </div>
      <form className='mt-[26px] mb-[50px] min-h-[574px]'>
        {step === 1 &&<div className='flex flex-col gap-[10px]'>
        <h1 className='font-playfair font-[700] text-[18px] text-secondary'>Personal Information </h1>
        <label className='flex flex-col gap-[10px]'>
          <span>Name</span>
          <div className='flex gap-[6%]'>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-[47%]' placeholder='First name'/>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-[47%]' placeholder='Last name'/>
          </div>
        </label>
        <label className='flex flex-col gap-[10px]'>
          <span>Email</span>
          <div className=''>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='Enter your email address'/>
          </div>
        </label>
        <label className='flex flex-col gap-[10px]'>
          <span>Phone number</span>
          <div className=''>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='Enter your phone number'/>
          </div>
        </label>
        </div>}
        {step === 2 &&<div className='flex flex-col gap-[10px]'>
        <h1 className='font-playfair font-[700] text-[18px] text-secondary'>Business Information </h1>
        <label className='flex flex-col gap-[10px]'>
          <span>Business Name</span>
          <div className=''>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='Enter your business name'/>
          </div>
        </label>
        <label className='flex flex-col gap-[10px]'>
          <span>Business location</span>
          <div className='flex flex-col gap-[10px]'>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='Address '/>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='City/Area'/>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='State'/>
          </div>
        </label>
        <label className='flex flex-col gap-[10px]'>
          <span>How many kilometers can you travel for work?</span>
          <div className=''>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='1KM'/>
          </div>
        </label>
        </div>}
        {step === 3 && <div className='flex flex-col gap-[10px]'>
        <h1 className='font-playfair font-[700] text-[18px] text-secondary'>Service Details </h1>
        <label className='flex flex-col gap-[10px]'>
          <span>Service category</span>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='Select category'/>
        </label>
        <label className='flex flex-col gap-[10px]'>
          <span>Brief description</span>
            <textarea type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='Briefly describe the type of service you provide'/>
        </label>
        <label className='flex flex-col gap-[10px]'>
          <span>Years of experience</span>
          <div className=''>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='Select'/>
          </div>
        </label>
        <label className='flex flex-col gap-[10px]'>
          <span>Social media profiles(optional)</span>
          <div className='flex flex-col gap-[10px]'>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='Instagram'/>
            <input type="text" className='py-[16px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full' placeholder='WhatsApp'/>
          </div>
        </label>
        </div>}
        <div className='w-full flex justify-center mt-[20px]'>
        {step === 3 && <button className="bg-primary rounded-[10px] py-[13px] px-[30px] text-white hover:bg-opacity-70">Submit</button>}
        </div>
      </form>
      <div className='flex justify-between w-full'>
        {step > 1 && <button className='text-[#B1B1B1] font-[700] font-lato'  onClick={() => setStep(step-1)}>Back</button>}
        {step<3 &&<button className='text-primary font-[700] font-lato flex justify-end w-full' onClick={() => setStep(step+1)}>Next</button>}
      </div>
    </Modal>
  )
}