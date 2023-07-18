import React from 'react'

interface INumber extends React.InputHTMLAttributes<HTMLInputElement>{}

export const Number = (props: INumber) => {
  return (
    <>
      <input type='number' {...props}/> 
    </>
  )
}

