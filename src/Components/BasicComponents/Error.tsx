import React from "react"

interface IError extends React.HTMLAttributes<HTMLSpanElement> {
  value: string
}

export const Error = ({ children, value }: IError) => {
  return (
    <>
      {children}
      <br />
      {value ? <span style={{ color: "red" }}>{value}</span> : <></>}
      <br />
    </>
  )
}
