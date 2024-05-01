// CreateOrderModal.tsx
import React, { useState } from 'react';

interface CreateOrderModalProps {
  onClose: () => void;
}

const CreateOrderModal: React.FC<CreateOrderModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    customer: '',
    date: '',
    total: 0,
    items: [],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to handle form submission and create the new order
    console.log('Form data:', formData);
    onClose(); // Close the modal after form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Create Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="customer">Customer Name:</label>
            <input
              type="text"
              id="customer"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="date">Order Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="total">Total:</label>
            <input
              type="number"
              id="total"
              name="total"
              value={formData.total}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          {/* Additional form fields for items */}
          {/* Example:
          <div className="mb-4">
            <label className="block mb-2" htmlFor="item1">Item 1:</label>
            <input
              type="text"
              id="item1"
              name="item1"
              value={formData.items[0] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          */}
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Create</button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrderModal;
