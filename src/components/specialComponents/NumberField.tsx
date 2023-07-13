import React from 'react'

const NumberField = ({ type, name, value, onChange }) => {
  return (
    <>
      <input type={type} name={name} value={value} onChange={onChange} /> 
    </>
  )
}

export default NumberField
