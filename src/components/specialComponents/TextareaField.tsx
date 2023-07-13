import React from "react";

const TextareaField = ({ type, name, value, onChange }) => {
  return (
    <>
      <textarea type={type} name={name} value={value} onChange={onChange} />
    </>
  );
};

export default TextareaField;
