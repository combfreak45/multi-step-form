import React from 'react'
import { Link } from 'react-router-dom'

const Front = () => {
  return (
    <div className="h-5/6 flex flex-col items-center justify-center gap-10">
      <div className=" text-3xl sm:text-5xl lg:text-8xl font-semibold">Welcome to the Page!</div>
      <div className="bg-sky-300 rounded-[4rem] text-3xl font-semibold h-[5rem] w-[10rem] flex flex-col items-center justify-center hover:scale-110">
        <Link to="/login-page-1">Form</Link>
      </div>
    </div>
  );
}

export default Front
