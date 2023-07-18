import { useReducer } from "react"
import { Error } from "../BasicComponents/Error"
import { Input } from "../BasicComponents/Input"
import { Label } from "../BasicComponents/Label"
import { Textarea } from "../BasicComponents/Textarea"
import { Date } from "../BasicComponents/Date"
import { Number } from "../BasicComponents/Number"

const initState = {
  compName: { value: "", err: "" },
  address: { value: "", err: "" },
  yearOfReg: { value: "", err: "" },
  revenue: { value: "", err: "" },
}

const reducer = (state: any, action: any) => {
  console.log("state", state)
  console.log("action", action)
  switch (action.type) {
    case "compName":
      return {
        ...state,
        compName: {
          value: action.payload,
          err: "",
        },
      }
    case "compName:error":
      return {
        ...state,
        compName: {
          err: action.payload,
        },
      }
    case "address":
      return {
        ...state,
        address: {
          value: action.payload,
          err: "",
        },
      }
    case "address:error":
      return {
        ...state,
        address: {
          err: action.payload,
        },
      }
    case "yearOfReg":
      return {
        ...state,
        yearOfReg: {
          value: action.payload,
          err: "",
        },
      }
    case "yearOfReg:error":
      return {
        ...state,
        yearOfReg: {
          err: action.payload,
        },
      }
    case "revenue":
      return {
        ...state,
        revenue: {
          value: action.payload,
          err: "",
        },
      }
    case "revenue:error":
      return {
        ...state,
        revenue: {
          err: action.payload,
        },
      }
    default:
      return initState
  }
}
export const NewCompany = () => {
  const [state, dispatch] = useReducer(reducer, initState)

  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value })
  }

  const handleSubmit = () => {
    // console.log(state)
    if (!state.compName.value)
      dispatch({
        type: "compName:error",
        payload: "Please enter company name",
      })
    if (!state.address.value)
      dispatch({
        type: "address:error",
        payload: "Please enter address",
      })
    if (!state.yearOfReg.value)
      dispatch({
        type: "yearOfReg:error",
        payload: "Please enter year of registration",
      })
    if (!state.revenue.value)
      dispatch({
        type: "revenue:error",
        payload: "Please enter revenue",
      })
    if (
      state.compName.value &&
      state.address.value &&
      state.yearOfReg.value &&
      state.revenue.value
    ) {
      console.log(
        "Company Data",
        state.compName.value,
        state.address.value,
        state.yearOfReg.value,
        state.revenue.value
      )
    }
  }
  // console.log(state)
  return (
    <div>
      <Error value={state.compName.err}>
        <Label>Name</Label>
        <Input
          type="text"
          name="compName"
          value={state.compName.value}
          onChange={handleChange}
        />
      </Error>
      <Error value={state.address.err}>
        <Label>Address</Label>
        <Textarea
          name="address"
          value={state.address.value}
          onChange={handleChange}
        />
      </Error>
      <Error value={state.yearOfReg.err}>
        <Label>Year of Registration</Label>
        <Date
          name="yearOfReg"
          value={state.yearOfReg.value}
          onChange={handleChange}
        />
      </Error>
      <Error value={state.revenue.err}>
        <Label>Revenue</Label>
        <Number
          type="number"
          name="revenue"
          value={state.revenue.value}
          onChange={handleChange}
        />
      </Error>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
