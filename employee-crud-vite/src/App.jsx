import React, { useEffect, useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm.jsx";
import EmployeeTable from "./components/EmployeeTable.jsx";
import PopupModal from "./components/PopupModal.jsx";

import {
  getEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "./api.jsx";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [popupType, setPopupType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getEmployees(); // getEmployees returns the array directly
      setEmployees(data || []);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (form) => {
    try {
      await addEmployee(form);
      fetchData();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleEditSave = async () => {
    try {
      await updateEmployee(selectedEmployee.id, selectedEmployee);
      setShowPopup(false);
      fetchData();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <h2>Loading employees...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Employee CRUD App</h1>
      <EmployeeForm onAdd={handleAdd} />
      <EmployeeTable
        employees={employees}
        onView={(emp) => {
          setSelectedEmployee(emp);
          setPopupType("view");
          setShowPopup(true);
        }}
        onEdit={(emp) => {
          setSelectedEmployee(emp);
          setPopupType("edit");
          setShowPopup(true);
        }}
        onDelete={handleDelete}
      />
      {showPopup && (
        <PopupModal
          type={popupType}
          employee={selectedEmployee}
          onClose={() => setShowPopup(false)}
          onChange={setSelectedEmployee}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
}
