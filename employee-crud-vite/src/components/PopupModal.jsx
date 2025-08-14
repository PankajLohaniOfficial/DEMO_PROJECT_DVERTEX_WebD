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
            <div className="popup-details">
              <p>
                <strong>Name:</strong> {employee.name}
              </p>
              <p>
                <strong>Email:</strong> {employee.email}
              </p>
              <p>
                <strong>Phone:</strong> {employee.phone}
              </p>
            </div>
          </>
        ) : (
          <>
            <h2>Edit Employee</h2>
            <div className="popup-form">
              <input
                type="text"
                value={employee.name}
                placeholder="Name"
                onChange={(e) =>
                  onChange({ ...employee, name: e.target.value })
                }
              />
              <input
                type="email"
                value={employee.email}
                placeholder="Email"
                onChange={(e) =>
                  onChange({ ...employee, email: e.target.value })
                }
              />
              <input
                type="text"
                value={employee.phone}
                placeholder="Phone"
                onChange={(e) =>
                  onChange({ ...employee, phone: e.target.value })
                }
              />
              <button className="btn-update" onClick={onSave}>
                Update
              </button>
            </div>
          </>
        )}
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
