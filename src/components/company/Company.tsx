import React, { useState } from "react";
import { InputField } from "../specialComponents/InputField";
import { ErrorField } from "../specialComponents/ErrorField";
import LabelField from "../specialComponents/LabelField";
import TextareaField from "../specialComponents/TextareaField";
import DateField from "../specialComponents/DateField";
import NumberField from "../specialComponents/NumberField";

export const Company = () => {
  const [compName, setCompName] = useState("");
  const [address, setAddress] = useState("");
  const [yearOfReg, setYearOfReg] = useState("");
  const [revenue, setRevenue] = useState("");
  const [error, setError] = useState(false);

  const validate = () => {
    if (!compName || !address || !yearOfReg || !revenue) return setError(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    let cmpyData = {
      compName,
      address,
      yearOfReg,
      revenue,
    };
    if (compName && address && yearOfReg && revenue) {
      console.log("Company Data", cmpyData);
    }
  };

  return (
    <div>
      <>
        <section>
          <ErrorField error={error} value={compName} name="Company Name">
            <LabelField label="Company Name"/>
            <InputField
              type="text"
              name="compName"
              value={compName}
              onChange={(e) => setCompName(e.target.value)}
            />
          </ErrorField>
        </section>
        <section>
          <ErrorField error={error} value={address} name="Company Address">
            <LabelField label="Company Address"/>
            <TextareaField
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </ErrorField>
        </section>
        <section>
          <ErrorField
            error={error}
            value={yearOfReg}
            name="Year of Registraion"
          >
            <LabelField label="Year of Registration"/>
            <DateField
              type="date"
              name="yearOfReg"
              value={yearOfReg}
              onChange={(e) => setYearOfReg(e.target.value)}
            />
          </ErrorField>
        </section>
        <section>
          <ErrorField error={error} value={revenue} name="Revenue">
            <LabelField 
              label="Revenue"/>
            <NumberField
              type="number"
              name="revenue"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
            />
          </ErrorField>
        </section>
        <button onClick={handleSubmit}>Submit</button>
      </>
    </div>
  );
};
