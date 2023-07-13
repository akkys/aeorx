import React, { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <section>
          <label>Employee Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          {error && name.length <= 0 ? (
            <span>Name should not be empty.</span>
          ) : (
            ""
          )}
        </section>
        <section>
          <label>Employee Address</label>
          <textarea
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          {error && address.length <= 0 ? (
            <span>Address should not be empty.</span>
          ) : (
            ""
          )}
        </section>
        <section>
          <label>Age</label>
          <input
            type="date"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          {error && age.length <= 0 ? (
            <span>Age should not be empty.</span>
          ) : (
            ""
          )}
        </section>
        <section>
          <label>Salary</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <br />
          {error && salary.length <= 0 ? (
            <span>Salary should not be empty.</span>
          ) : (
            ""
          )}
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Employee;
