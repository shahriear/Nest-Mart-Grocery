'use client';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Settings() {
  const [form, setForm] = useState({
    username: 'John Doe',
    email: 'john@example.com',
    password: '',
    notifications: true,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dummy save action
    toast.success('Settings saved successfully!');
    console.log('Saved data:', form);
  };

  return (
    <div className="p-6 bg-gray-200 min-h-scree">
      <Toaster position="bottom-center" />
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow max-w-lg space-y-6"
      >
        <div>
          <label className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="notifications"
            checked={form.notifications}
            onChange={handleChange}
            className="h-5 w-5 text-green-600"
          />
          <label className="text-gray-700">Enable Notifications</label>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
