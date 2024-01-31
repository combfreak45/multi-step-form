import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Front from './Components/Front'
import Form1 from './Components/Form1'
import Form2 from './Components/Form2'
import Thanks from './Components/Thanks'

const App = () => {
  return (
    <Routes>
         <Route path='/' element={<Layout/>}>
         <Route index element={<Front/>}/>
         <Route path='login-page-1' element={<Form1/>}/>
         <Route path='login-page-2' element={<Form2/>}/>
         <Route path='thanks' element={<Thanks/>}/>
         </Route>
  
    </Routes>
  )
}

export default App
