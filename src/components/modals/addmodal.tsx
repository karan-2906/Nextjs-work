import React, { useState } from 'react';

interface AddModalProps {
  onClose: () => void;
  onAdd: (name: string, price: number) => void;
}

const AddModal: React.FC<AddModalProps> = ({ onClose, onAdd }) => {
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);

  const handleAdd = () => {
    // Check if product name and price are not empty
    if (productName.trim() === '' || productPrice <= 0) {
      alert('Please enter valid product name and price.');
      return;
    }
    
    // Call the onAdd function passed from the parent component
    onAdd(productName, productPrice);

    // Close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center text-black bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        {/* Input fields */}
        <div className="mb-4">
          <label className="block mb-2" htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={e => setProductName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={e => setProductPrice(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        {/* Buttons */}
        <div className="flex justify-end">
          <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Add</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
