import React from "react";
import "./Modal.scss";

function Modal({ title, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-text">
            <p>
              Please confirm that you'd like to delete the Washington warehouse
              from the list of warehouses. You won't be able to undo this
              action.
            </p>
          </div>

          <div className="modal-buttons">
            <button className="modal-button" onClick={onClose}>Cancel</button>
            <button className="modal-button modal-button__delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;