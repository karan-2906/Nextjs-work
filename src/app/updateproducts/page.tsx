'use client';
import React, { useState } from 'react';
import DeleteModal from '../../components/modals/deletemodal'; 
import UpdateModal from '../../components/modals/updatemodal'; 
import AddModal from '../../components/modals/addmodal'; 
import productsdata from '../../assets/productsdata.json';

const ProductsPage = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);
    const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
    const [addModalVisible, setAddModalVisible] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
    const [newProductName, setNewProductName] = useState<string>('');
    const [newProductPrice, setNewProductPrice] = useState<number>(0);

    const products = productsdata;

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleDeleteClick = (product: any) => {
        setSelectedProduct(product);
        setDeleteModalVisible(true);
    };

    const handleUpdateClick = (product: any) => {
        setSelectedProduct(product);
        setUpdateModalVisible(true);
    };

    const toggleProductSelection = (productId: number) => {
        setSelectedProducts(prevSelectedProducts => {
            if (prevSelectedProducts.includes(productId)) {
                return prevSelectedProducts.filter(id => id !== productId);
            } else {
                return [...prevSelectedProducts, productId];
            }
        });
    };

    const handleDeleteSelected = () => {
        alert('Deleting selected products:');
        console.log('Deleting selected products:', selectedProducts);
        setSelectedProducts([]);
    };

    const handleAddModalOpen = () => {
        setAddModalVisible(true);
    };

    const handleAddModalClose = () => {
        setAddModalVisible(false);
        // Reset input fields
        setNewProductName('');
        setNewProductPrice(0);
    };

    const handleAddProduct = () => {
        // Logic to add new product
        console.log('Adding new product:', { name: newProductName, price: newProductPrice });
        // Close the modal
        handleAddModalClose();
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <div className='flex justify-between mb-4'>
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-3/4 border border-gray-300 rounded-md px-4 py-2 mb-4 text-black"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4" onClick={handleAddModalOpen}>
                    Add Product
                </button>
            

            {/* Delete selected button */}
            <div className="flex justify-end mb-4">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={handleDeleteSelected}
                    disabled={selectedProducts.length === 0}
                >
                    Delete Selected ({selectedProducts.length})
                </button>
            </div>
            </div>

            <div className="flex flex-col gap-3">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white border border-gray-300 rounded-md p-4 flex flex-col">
                        {/* Product details */}
                        <div className="mt-4 flex gap-4 items-center justify-between">
                            <div className='flex items-center gap-3'>
                                <input
                                    type="checkbox"
                                    checked={selectedProducts.includes(product.id)}
                                    onChange={() => toggleProductSelection(product.id)}
                                />
                                <h2 className="text-xl font-semibold mb-2 text-black">{product.name}</h2>
                                <p className="text-gray-700 text-sm">Price: ${product.price}</p>
                            </div>
                            {/* Action buttons */}
                            <div className='flex gap-3 items-center'>
                                <button onClick={() => handleDeleteClick(product)} className='text-black border-2 p-2'>Delete</button>
                                <button onClick={() => handleUpdateClick(product)} className='text-black border-2 p-2'>Update</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Delete Modal */}
            {deleteModalVisible && <DeleteModal product={selectedProduct} onClose={() => setDeleteModalVisible(false)} />}

            {/* Update Modal */}
            {updateModalVisible && <UpdateModal product={selectedProduct} onClose={() => setUpdateModalVisible(false)} />}

            {/* Add Product Modal */}
            {addModalVisible && <AddModal onClose={handleAddModalClose} onAdd={handleAddProduct} />}
        </div>
    );
};

export default ProductsPage;
