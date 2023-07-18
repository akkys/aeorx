import React from "react"

interface ILabel extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ children, ...props }: ILabel) => {
  return <label {...props}>{children}</label>
}
