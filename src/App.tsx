import { useState } from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Company } from "./Components/Company/Company"
import Employee from "./Components/Employee/Employee"
// import { Routes } from 'react-router-dom/dist/index'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/capture/company" element={<Company />} />
        <Route path="/capture/employee" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  )
}
