import React from 'react'

export const ErrorField = ({children,error,value,name}) => {
  return (
    <>
    {children}<br />
     {error && value.length <= 0 ? (
            <span>{name} should not be empty.</span>
          ) : (
            ""
          )} 
    </>
  )
}

