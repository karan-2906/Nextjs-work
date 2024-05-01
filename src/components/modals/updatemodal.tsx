// UpdateModal.tsx
import React, { useState } from 'react';

interface UpdateModalProps {
  product: { id: number; name: string; price: number }; 
  onClose: () => void; 
}

const UpdateModal: React.FC<UpdateModalProps> = ({ product, onClose }) => {
  const [updatedPrice, setUpdatedPrice] = useState<number>(product.price);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedPrice(Number(e.target.value));
  };

  const handleUpdate = () => {
    // Logic to update the product with the new price
    console.log('Updating product:', { ...product, price: updatedPrice });
    // Once the product is updated, close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md text-black">
        <h2 className="text-xl font-semibold mb-4">Update Product Price</h2>
        <p className="mb-4">Enter the new price for {product.name}:</p>
        <input
          type="number"
          value={updatedPrice}
          onChange={handlePriceChange}
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
        />
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleUpdate}>
            Update
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
