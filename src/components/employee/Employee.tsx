import React, { useState } from "react";
import { ErrorField } from "../specialComponents/ErrorField";
import { InputField } from "../specialComponents/InputField";
import LabelField from "../specialComponents/LabelField";
import TextareaField from "../specialComponents/TextareaField";
import DateField from "../specialComponents/DateField";
import NumberField from "../specialComponents/NumberField";

const Employee = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState(false);

  const validate = () => {
    if (!name || !address || !age || !salary) return setError(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    let empData = {
      name,
      address,
      age,
      salary,
    };
    if (name && address && age && salary) {
      console.log("Employee Data", empData);
    }
  };

  return (
    <div className="main_container">
      <>
        <section>
          <ErrorField error={error} value={name} name="Name">
            <LabelField label="Name" />
            <InputField
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </ErrorField>
        </section>
        <section>
          <ErrorField error={error} value={address} name="Address">
            <LabelField label="Address"/>
            <TextareaField
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </ErrorField>
        </section>
        <section>
          <ErrorField error={error} value={age} name="Age">
            <LabelField label="Age"/>
            <DateField
              type="date"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </ErrorField>
        </section>
        <section>
          <ErrorField error={error} value={salary} name="Salary">
            <LabelField label="Salary"/>
            <NumberField
              type="number"
              name="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </ErrorField>
        </section>
        <button onClick={handleSubmit}>Submit</button>
      </>
    </div>
  );
};

export default Employee;
