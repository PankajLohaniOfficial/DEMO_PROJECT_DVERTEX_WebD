import axios from "axios";

const API_URL = "http://localhost:5000/employees";

// Get all employees
export const getEmployees = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

// Add a new employee
export const addEmployee = async (employee) => {
  try {
    // Do NOT set id here, let json-server handle it
    const res = await axios.post(API_URL, employee);
    return res.data;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
};

// Update an employee
export const updateEmployee = async (id, updatedEmployee) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, updatedEmployee);
    return res.data;
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error;
  }
};

// Delete an employee
export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};
