import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { Company } from './components/company/Company'
import Employee from './components/employee/Employee'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/capture/company' element={<Company/>} />
        <Route path='/capture/employee' element={<Employee/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
