import React from "react";

export default function PopupModal({
  type,
  employee,
  onClose,
  onChange,
  onSave,
}) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        {type === "view" ? (
          <>
            <h2>View Employee</h2>
            <p>
              <strong>Name:</strong> {employee.name}
            </p>
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <p>
              <strong>Phone:</strong> {employee.phone}
            </p>
          </>
        ) : (
          <>
            <h2>Edit Employee</h2>
            <input
              type="text"
              value={employee.name}
              onChange={(e) => onChange({ ...employee, name: e.target.value })}
            />
            <input
              type="email"
              value={employee.email}
              onChange={(e) => onChange({ ...employee, email: e.target.value })}
            />
            <input
              type="text"
              value={employee.phone}
              onChange={(e) => onChange({ ...employee, phone: e.target.value })}
            />
            <button onClick={onSave}>Update</button>
          </>
        )}
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
