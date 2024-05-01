'use client'
import React, { useState } from 'react';
import ordersData from '../../assets/orders.json'; // Import orders data
import CreateOrderModal from '../../components/modals/createmodal';
import EditOrderModal from '../../components/modals/editmodal'; // Import the edit order modal
import DeleteOrderModal from '../../components/modals/deleteordermodal'; // Import the delete order modal

const OrdersPage = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
    const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false); // State for delete modal visibility
    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleCreateOrder = () => {
        setCreateModalVisible(true);
    };

    const handleEditOrder = (order: any) => {
        setSelectedOrder(order);
        setEditModalVisible(true);
    };

    const handleDeleteOrder = (order: any) => {
        setSelectedOrder(order);
        setDeleteModalVisible(true); // Show delete modal
    };

    const handleConfirmDelete = () => {
        // Logic to delete the selected order
        console.log('Deleting order:', selectedOrder);
        // After deletion, close the delete modal
        setDeleteModalVisible(false);
    };

    // Filter orders based on search query
    const filteredOrders = ordersData.filter(order =>
        order.customer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 text-black">
            {/* <h1 className="text-2xl font-semibold mb-4">Orders</h1> */}
            {/* Search bar */}
            <div className="flex mb-4 mt-28">
                <input
                    type="text"
                    placeholder="Search orders by customer..."
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mr-2"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button onClick={handleCreateOrder} className="bg-blue-500 text-white px-4 py-2 rounded-md">Create Order</button>
            </div>
            {/* Orders list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredOrders.map(order => (
                    <div key={order.id} className="bg-white border border-gray-300 rounded-md p-4">
                        <h2 className="text-xl font-semibold mb-2">{order.customer}</h2>
                        <p className="text-gray-700 mb-2">Order Date: {order.date}</p>
                        <p className="text-gray-700 mb-2">Total: ${order.total}</p>
                        <ul>
                            {order.items.map((item, index) => (
                                <li key={index}>{item.name} - ${item.price}</li>
                            ))}
                        </ul>
                        <div className="flex justify-end mt-4">
                            <button onClick={() => handleEditOrder(order)} className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                            <button onClick={() => handleDeleteOrder(order)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {createModalVisible && <CreateOrderModal onClose={() => setCreateModalVisible(false)} />}
            {editModalVisible && <EditOrderModal order={selectedOrder} onClose={() => setEditModalVisible(false)} />}
            {/* Pass onDelete prop to DeleteOrderModal */}
            {deleteModalVisible && <DeleteOrderModal order={selectedOrder} onClose={() => setDeleteModalVisible(false)} onDelete={handleConfirmDelete} />}
        </div>
    );
};

export default OrdersPage;
