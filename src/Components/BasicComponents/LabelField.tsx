import React from 'react'

interface ILabelField extends React.LabelHTMLAttributes<HTMLLabelElement> { }

export const LabelField = ({ children, ...props }: ILabelField) => {
  return <label {...props}>{children}</label>
}
