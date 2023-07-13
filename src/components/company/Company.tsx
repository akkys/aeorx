import React, { useState } from "react";

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
    if(compName && address && yearOfReg && revenue){
      console.log("Company Data", cmpyData);
    }
    
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
          /><br />
          {error && compName.length <= 0 ? (
            <span>Company Name should not be empty.</span>
          ) : (
            ""
          )}
        </section>
        <section>
          <label>Company Address</label>
          <textarea
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          /><br />
          {error && address.length <= 0 ? (
            <span>Address should not be empty.</span>
          ) : (
            ""
          )}
        </section>
        <section>
          <label>Year of Registration</label>
          <input
            type="date"
            value={yearOfReg}
            onChange={(e) => setYearOfReg(e.target.value)}
          /><br />
          {error && yearOfReg.length <= 0 ? (
            <span>Year of Registration should not be empty.</span>
          ) : (
            ""
          )}
        </section>
        <section>
          <label>Company Revenue</label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
          /><br />
          {error && revenue.length <= 0 ? (
            <span>Revenue should not be empty.</span>
          ) : (
            ""
          )}
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
