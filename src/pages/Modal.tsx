import React from "react";
import "./Modal.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, content }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Modal;
