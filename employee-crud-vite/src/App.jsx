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

  const fetchData = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (form) => {
    try {
      await addEmployee({
        ...form,
        id: Date.now(), // generate unique ID
      });
      fetchData();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchData();
  };

  const handleEditSave = async () => {
    await updateEmployee(selectedEmployee.id, selectedEmployee);
    setShowPopup(false);
    fetchData();
  };

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
