import { useState } from "react"
import { Input } from "../BasicComponents/Input"
import { Label } from "../BasicComponents/Label"
import { Textarea } from "../BasicComponents/Textarea"
import { Date } from "../BasicComponents/Date"
import { Number } from "../BasicComponents/Number"
import { getInputEventValue, getTextareaEventValue } from "../../Utils/Helpers"
import { Error } from "../BasicComponents/Error"

export const Company = () => {
  const [compName, setCompName] = useState({
    value: "",
    err: "",
  })
  const [address, setAddress] = useState("")
  const [yearOfReg, setYearOfReg] = useState("")
  const [revenue, setRevenue] = useState("")
  const [errObj, setErrObj] = useState({} as any)
  // console.log(compName.value)
  const handleSubmit = () => {
    console.log("compName", compName)
    var _errObj = {} as any
    if (!compName.value) {
      setCompName((prev) => ({
        ...prev,
        err: "Please enter company name",
      }))
    }

    if (!address) {
      _errObj.address = "Please enter address"
    }
    if (!yearOfReg) {
      _errObj.yearOfReg = "Please enter year of registration"
    }
    if (!revenue) {
      _errObj.revenue = "Please enter revenue"
    }
    setErrObj(_errObj)

    let cmpyData = {
      compName,
      address,
      yearOfReg,
      revenue,
    }

    if (compName && address && yearOfReg && revenue) {
      console.log("Company Data", cmpyData)
    }
  }

  const onNameChange = getInputEventValue(setCompName)
  const onAddressChange = getTextareaEventValue(setAddress)
  const onDateChange = getInputEventValue(setYearOfReg)
  const onRevenueChange = getInputEventValue(setRevenue)

  return (
    <>
      <Error value={compName.err}>
        <Label>Name</Label>
        <Input
          type="text"
          name="compName"
          value={compName.value}
          onChange={onNameChange}
        />
      </Error>
      <Error value={errObj.address}>
        <Label>Address</Label>
        <Textarea name="address" value={address} onChange={onAddressChange} />
      </Error>

      <Error value={errObj.yearOfReg}>
        <Label>Year of Registration</Label>
        <Date name="yearOfReg" value={yearOfReg} onChange={onDateChange} />
      </Error>
      <Error value={errObj.revenue}>
        <Label>Revenue</Label>
        <Number
          type="number"
          name="revenue"
          value={revenue}
          onChange={onRevenueChange}
        />
      </Error>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
