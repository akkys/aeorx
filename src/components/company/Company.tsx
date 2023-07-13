import React, { useState } from "react";

export const Company = () => {
  const [compName, setCompName] = useState("");
  const [address, setAddress] = useState("");
  const [yearOfReg, setYearOfReg] = useState("");
  const [revenue, setRevenue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let cmpyData = {
      compName,
      address,
      yearOfReg,
      revenue,
    };
    console.log("Company Data", cmpyData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <label>Company Name</label>
          <input
            type="text"
            name="compName"
            value={compName}
            onChange={(e) => setCompName(e.target.value)}
          />
        </section>
        <section>
          <label>Company Address</label>
          <textarea
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </section>
        <section>
          <label>Year of Registration</label>
          <input
            type="date"
            value={yearOfReg}
            pattern="[0-9]"
            onChange={(e) => setYearOfReg(e.target.value)}
          />
        </section>
        <section>
          <label>Company Revenue</label>
          <input
            type="number"
            value={revenue}
            pattern="[0-9]"
            onChange={(e) => setRevenue(e.target.value)}
          />
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

