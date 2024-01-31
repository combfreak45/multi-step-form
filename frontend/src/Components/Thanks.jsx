import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FormContext } from '../formContext';

const Thanks = () => {

  const {formOneData, formTwoData} = useContext(FormContext)
  return (
    <div className="h-5/6 flex flex-col items-center justify-center gap-10">
      <div className='flex flex-col items-center gap-5 justify-center'>
        <div className='font-bold text-3xl lg:text-7xl'>Welcome {formOneData.name} </div>
        <div className= ' border-3 border-black  p-5 flex flex-col gap-2 font-medium text-xl'>
          <div>Email: {formOneData.email}</div>
          <div>Address: {formTwoData.address}</div>
          <div>Pincode: {formTwoData.pincode}</div>
        </div>
      </div>
      <div className="bg-sky-300 rounded-[4rem] text-3xl font-semibold h-[5rem] w-[10rem] flex flex-col items-center justify-center hover:scale-110">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Thanks
