import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Company } from "./Components/Company/Company"
import Employee from "./Components/Employee/Employee"
import { NewCompany } from "./Components/Company/NewCompany"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/capture/company" element={<Company />} />
        <Route path="/capture/employee" element={<Employee />} />
        <Route path="/capture/newCompany" element={<NewCompany />} />
      </Routes>
    </BrowserRouter>
  )
}
