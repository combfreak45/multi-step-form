import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../formContext';

const Form1 = () => {
  const { setFormData } = useContext(FormContext);
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault()

    if (!name.trim()) {
      alert("name is required")
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      alert("email is required or incorrect format");
      return;
    }
    setFormData({ name, email }, 1);
    navigate('/login-page-2')
  }
  return (
    <div className="h-5/6 flex flex-col items-center justify-center gap-10">
      <div className="bg-white p-4 sm:p-10  border-black border-2 rounded-3xl">
        <form className=" flex flex-col gap-10 lg:text-4xl font-semibold">
          <div className="bg-sky-300 rounded-[4rem] lg:text-3xl font-semibold py-4 text-center">
            Personal Details
          </div>
          <div className="flex flex-row gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="border-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="border-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <input
            onClick={handleSubmit}
            type="submit"
            className="bg-sky-300 rounded-[4rem] lg:text-3xl font-semibold py-4  hover:scale-110"
          />
        </form>
      </div>
    </div>
  );
}

export default Form1
