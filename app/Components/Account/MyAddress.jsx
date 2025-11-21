'use client';
import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiX } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

export default function MyAddress() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Home',
      address: '123, Green Street, Dhaka, Bangladesh',
      phone: '+880 1234 567890',
    },
    {
      id: 2,
      name: 'Office',
      address: '456, Blue Avenue, Dhaka, Bangladesh',
      phone: '+880 9876 543210',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [form, setForm] = useState({ name: '', address: '', phone: '' });

  const openModal = (addr = null) => {
    if (addr) {
      setEditingAddress(addr);
      setForm({ name: addr.name, address: addr.address, phone: addr.phone });
    } else {
      setEditingAddress(null);
      setForm({ name: '', address: '', phone: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSave = () => {
    if (!form.name || !form.address || !form.phone) {
      toast.error('Please fill all fields');
      return;
    }

    if (editingAddress) {
      setAddresses(prev =>
        prev.map(a => (a.id === editingAddress.id ? { ...a, ...form } : a))
      );
      toast.success('Address updated successfully!');
    } else {
      setAddresses(prev => [...prev, { id: Date.now(), ...form }]);
      toast.success('Address added successfully!');
    }
    closeModal();
  };

  const handleDelete = id => {
    setAddresses(prev => prev.filter(a => a.id !== id));
    toast.success('Address deleted successfully!');
  };

  return (
    <div className="p-6 bg-gray-200 min-h-scre">
      <Toaster position="bottom-center" />
      <h1 className="text-2xl font-bold mb-6">Billing Address</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {addresses.map(addr => (
          <div
            key={addr.id}
            className="bg-white p-4 rounded-lg shadow-md border flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold">{addr.name}</h2>
              <p className="text-gray-600">{addr.address}</p>
              <p className="text-gray-500 text-sm mt-1">{addr.phone}</p>
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => openModal(addr)}
                className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                <FiEdit /> Edit
              </button>
              <button
                onClick={() => handleDelete(addr.id)}
                className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                <FiTrash2 /> Delete
              </button>
            </div>
          </div>
        ))}

        {/* Add New Address Card */}
        <div
          className="bg-white p-4 rounded-lg shadow-md border flex items-center justify-center hover:bg-green-50 cursor-pointer transition"
          onClick={() => openModal()}
        >
          <button className="flex items-center gap-2 text-green-600 font-semibold">
            <FiPlus size={20} /> Add New Address
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <FiX size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">
              {editingAddress ? 'Edit Address' : 'Add New Address'}
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name (Home, Office...)"
                className="w-full border rounded px-3 py-2"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border rounded px-3 py-2"
                value={form.address}
                onChange={e => setForm({ ...form, address: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border rounded px-3 py-2"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <button
              onClick={handleSave}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
