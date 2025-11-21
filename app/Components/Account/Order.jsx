'use client';
import React, { useState } from 'react';
import { FiEye, FiTrash2 } from 'react-icons/fi';

const initialOrders = [
  {
    id: 'ORD12345',
    date: '2025-11-21',
    customer: 'John Doe',
    total: 120.0,
    status: 'Delivered',
  },
  {
    id: 'ORD12346',
    date: '2025-11-20',
    customer: 'Jane Smith',
    total: 80.0,
    status: 'Pending',
  },
  {
    id: 'ORD12347',
    date: '2025-11-19',
    customer: 'Alice Brown',
    total: 45.5,
    status: 'Cancelled',
  },
  {
    id: 'ORD12348',
    date: '2025-11-18',
    customer: 'Bob Martin',
    total: 200.0,
    status: 'Delivered',
  },
  {
    id: 'ORD12349',
    date: '2025-11-17',
    customer: 'Sara Khan',
    total: 150.0,
    status: 'Pending',
  },
  // Add more dummy orders if needed
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 3;

  // Filtered & Searched
  const filteredOrders = orders
    .filter(
      o =>
        o.customer.toLowerCase().includes(search.toLowerCase()) &&
        (statusFilter ? o.status === statusFilter : true)
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      if (sortField === 'date') {
        return sortOrder === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      if (sortField === 'total') {
        return sortOrder === 'asc' ? a.total - b.total : b.total - a.total;
      }
      return 0;
    });

  // Pagination
  const indexOfLast = currentPage * ordersPerPage;
  const indexOfFirst = indexOfLast - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div className="p-6 bg-gray-200 min-h-scree">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by customer..."
          className="border bg-gray-50 rounded px-3 py-2 flex-1"
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
        <select
          className="border bg-gray-50 rounded px-3 py-2"
          value={statusFilter}
          onChange={e => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Status</option>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <select
          className="border bg-gray-50 rounded px-3 py-2"
          value={sortField}
          onChange={e => setSortField(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="date">Date</option>
          <option value="total">Total</option>
        </select>
        {sortField && (
          <button
            className="px-3 py-2 bg-green-600 text-white rounded"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          >
            {sortOrder === 'asc' ? 'Asc' : 'Desc'}
          </button>
        )}
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="text-left py-3 px-4">Order ID</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Customer</th>
              <th className="text-left py-3 px-4">Total</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-center py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map(order => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.date}</td>
                <td className="py-3 px-4">{order.customer}</td>
                <td className="py-3 px-4">${order.total.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-semibold ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4 flex justify-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FiEye size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? 'bg-green-600 text-white'
                : 'bg-white border'
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
