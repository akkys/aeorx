import React from "react"

export const ErrorField = ({ children, error }) => {
  return (
    <>
      {children}
      {error ? <span>{error}</span> : <></>}
    </>
  )
}
