import React, { createContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
    
  const [formOneData, setFormOneData] = useState({});
  const [formTwoData, setFormTwoData] = useState({});

  const setFormData = (formData, formNumber) => {
    if (formNumber === 1) {
      setFormOneData(formData);
    } else if (formNumber === 2) {
      setFormTwoData(formData);
    }
  };

  return (
    <FormContext.Provider value={{ formOneData, formTwoData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
