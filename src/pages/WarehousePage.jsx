import React, { useState } from "react";
import WarehouseDetails from "../components/WarehouseDetails/WarehouseDetails";
import Modal from "../components/Modal/Modal";

function WarehousePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>   
      <WarehouseDetails />
      {isModalOpen && (
        <Modal
          title={`Delete Washington Warehouse?`}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default WarehousePage;
