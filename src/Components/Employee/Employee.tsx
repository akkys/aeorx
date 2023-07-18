import { useState } from "react"
import { Error } from "../BasicComponents/Error"
import { Input } from "../BasicComponents/Input"
import { Label } from "../BasicComponents/Label"
import { Textarea } from "../BasicComponents/Textarea"
import { Date } from "../BasicComponents/Date"
import { Number } from "../BasicComponents/Number"

const Employee = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [age, setAge] = useState("")
  const [salary, setSalary] = useState("")
  const [errObj, setErrObj] = useState({} as any)

  const handleSubmit = () => {
    var _errObj = {} as any

    if (!name) {
      _errObj.name = "Please enter Name"
    }
    if (!address) {
      _errObj.name = "Please enter address"
    }
    if (!age) {
      _errObj.name = "Please enter age"
    }
    if (!salary) {
      _errObj.name = "Please enter salary"
    }
    setErrObj(_errObj)

    let empData = {
      name,
      address,
      age,
      salary,
    }
    if (name && address && age && salary) {
      console.log("Employee Data", empData)
    }
  }

  return (
    <div className="main_container">
      <>
        <section>
          <Error value={errObj.name}>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Error>
        </section>
        <section>
          <Error value={errObj.address}>
            <Label>Address</Label>
            <Textarea
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Error>
        </section>
        <section>
          <Error value={errObj.age}>
            <Label>Age</Label>
            <Date
              type="date"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Error>
        </section>
        <section>
          <Error value={errObj.salary}>
            <Label>Salary</Label>
            <Number
              type="number"
              name="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </Error>
        </section>
        <button onClick={handleSubmit}>Submit</button>
      </>
    </div>
  )
}

export default Employee
