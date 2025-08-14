import axios from "axios";

const API_URL = "http://localhost:5000/employees";

export const getEmployees = () => axios.get(API_URL);
export const addEmployee = async (employee) => {
  return axios.post(API_URL, employee, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);
export const updateEmployee = (id, employee) =>
  axios.put(`${API_URL}/${id}`, employee);
