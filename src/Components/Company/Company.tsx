import React, { useState } from "react"
import { InputField } from "../BasicComponents/InputField"
import { ErrorField } from "../BasicComponents/ErrorField"
import { LabelField } from "../BasicComponents/LabelField"
import TextareaField from "../BasicComponents/TextareaField"
import DateField from "../BasicComponents/DateField"
import NumberField from "../BasicComponents/NumberField"
import { getInputEventValue } from "../../Utils/Helpers"

export const Company = () => {
  const [compName, setCompName] = useState("")
  const [address, setAddress] = useState("")
  const [yearOfReg, setYearOfReg] = useState("")
  const [revenue, setRevenue] = useState("")
  const [error, setError] = useState(false)

  const validate = () => {
    if (!compName || !address || !yearOfReg || !revenue) return setError(true)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault()
    validate()
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

  return (
    <>
      <ErrorField error={error}>
        <LabelField>Name</LabelField>
        <InputField
          type="text"
          name="compName"
          value={compName}
          onChange={onNameChange}
        />
      </ErrorField>

      <ErrorField error={error}>
        <LabelField>Address</LabelField>
        <TextareaField
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </ErrorField>
      <ErrorField error={error}>
        <LabelField>Year of Registration</LabelField>
        <DateField
          type="date"
          name="yearOfReg"
          value={yearOfReg}
          onChange={(e) => setYearOfReg(e.target.value)}
        />
      </ErrorField>
      <ErrorField error={error}>
        <LabelField>Revenue</LabelField>
        <NumberField
          type="number"
          name="revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        />
      </ErrorField>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
