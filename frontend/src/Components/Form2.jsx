import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../formContext";

const Form2 = () => {

 const {setFormData} = useContext(FormContext)
 const navigate = useNavigate();
 const [address,setAddress] = useState("")
 const [pincode,setPincode] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();


    if(!address.trim()){
      alert("addreess is required")
      return
    }
    if (!pincode || pincode.size >= 6) {
      alert("pincode is required");
      return;
    }
    setFormData({address,pincode},2)
    navigate("/thanks");
  };
  return (
    <div className="h-5/6 flex flex-col items-center justify-center gap-10">
      <div className="bg-white p-4 sm:p-10  border-black border-2 rounded-3xl">
        <form className=" flex flex-col gap-10 lg:text-4xl font-semibold">
          <div className="bg-sky-300 rounded-[4rem] lg:text-3xl font-semibold py-4 text-center">
            Address Details
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="address">Address:</label>
            <textarea
              type="text"
              id="address"
              className="border-4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="pincode">Pincode:</label>
            <input
              type="number"
              id="pincode"
              className="border-4"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
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
};

export default Form2;
