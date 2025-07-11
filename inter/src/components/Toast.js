import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const CustomToast = ({ show, message, onClose }) => {
    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast show={show} onClose={onClose} delay={2000} autohide bg="success">
                <Toast.Body className="text-white">{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default CustomToast;
