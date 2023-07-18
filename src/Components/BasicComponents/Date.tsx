import React from 'react'

interface IDate extends React.InputHTMLAttributes<HTMLInputElement>{}

export const Date = (props: IDate) => {
  return (
    <>
     <input type='date' {...props} /> 
    </>
  )
}

