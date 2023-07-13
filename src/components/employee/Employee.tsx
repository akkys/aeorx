import React, { useState } from 'react'

const Employee = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let empData = {
      name,
      address,
      age,
      salary,
    };
    console.log("Employee Data", empData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <label>Employee Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <section>
          <label>Employee Address</label>
          <textarea
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </section>
        <section>
          <label>Age</label>
          <input
            type="date"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </section>
        <section>
          <label>Salary</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Employee
