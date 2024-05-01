'use client'
import React, { useState } from 'react';

// Import products data and DarkModeContext
import productsdata from '../../assets/productsdata.json';
// import { useDarkMode } from '../../components/darkmode/useDarkMode'; // Update the path

// Sample data for products
const products = productsdata;

const ProductsPage = () => {
  // State for search query and sort by
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name'); // Default sort by name

  // Use the useDarkMode hook to access dark mode state and toggle function
  // const { darkMode } = useDarkMode();

  // Handlers for search and sort changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  // Sorting products based on sort by value
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  // Filtering sorted products based on search query
  const filteredProducts = sortedProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`container mx-auto px-4 mt-28`}> {/* Apply dark mode class */}
      {/* Search bar */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 mr-2"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="border border-gray-300 rounded-md px-4 py-2 text-black"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      {/* Product cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white border border-gray-300 rounded-md p-4">
            <div className="flex justify-center">
              {/* <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                objectFit="contain"
              /> */}
            </div>
            <div className="mt-4">
              <h2 className="text-4xl font-semibold mb-2 text-black">{product.name}</h2>
              <p className="text-gray-700">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
