import React from "react"

interface IInputField extends React.InputHTMLAttributes<HTMLInputElement> { }

export const InputField = (props: IInputField) => {
  return <input {...props} />
}
