import React, { useState } from "react";
import { useGlobalContext } from "./context";
import "../style/modal.css";


function EditModal() {
    const { isEditTodoModalOpen, closeEditTodoModal, error } = useGlobalContext();

    return (
        <div
        className={`${
            isEditTodoModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >

<div className="modal-container">
    
</div>
      </div>
    )
}

export default EditModal
