import React, { useState } from "react";

export default function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      alert("All fields are required");
      return;
    }
    onAdd(form);
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <div className="form-section">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />
      <button className="btn-add" onClick={handleSubmit}>
        Add Employee
      </button>
    </div>
  );
}
