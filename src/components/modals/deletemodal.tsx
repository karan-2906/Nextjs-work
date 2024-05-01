// DeleteModal.tsx
import React from 'react';

interface DeleteModalProps {
  product: { id: number; name: string }; 
  onClose: () => void; 
}

const DeleteModal: React.FC<DeleteModalProps> = ({ product, onClose }) => {
  const handleDelete = () => {
    // Logic to delete the product goes here
    console.log('Deleting product:', product);
    // Once the product is deleted, close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md text-black">
        <h2 className="text-xl font-semibold mb-4">Delete Product</h2>
        <p className="mb-4">Are you sure you want to delete {product.name}?</p>
        <div className="flex justify-end">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleDelete}>
            Delete
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
