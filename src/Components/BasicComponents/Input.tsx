import React from "react"

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: IInput) => {
  return <input {...props} />
}
