// DeleteOrderModal.tsx
import React from 'react';

interface DeleteOrderModalProps {
  order: any;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteOrderModal: React.FC<DeleteOrderModalProps> = ({ order, onClose, onDelete }) => {
  const handleDelete = () => {
    // Call onDelete to perform the deletion logic
    onDelete();
    onClose(); // Close the modal after deletion
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Delete Order</h2>
        <p className="mb-4">Are you sure you want to delete the order for {order.customer}?</p>
        <div className="flex justify-end">
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Delete</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
