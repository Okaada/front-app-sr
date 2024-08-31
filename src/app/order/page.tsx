'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../globals.css'; // Certifique-se de que o caminho está correto

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState([
    { comanda: 'Comanda 001', item: 'Item 001', quantity: 2 },
    { comanda: 'Comanda 002', item: 'Item 002', quantity: 1 },
    { comanda: 'Comanda 003', item: 'Item 003', quantity: 3 },
    // Adicione mais pedidos para fins de exemplo
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="w-full max-w-6xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Lista de Pedidos</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-bold text-gray-900">
                  Comanda
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-bold text-gray-900">
                  Item
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-bold text-gray-900">
                  Quantidade
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-900">{order.comanda}</td>
                  <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-900">{order.item}</td>
                  <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-900">{order.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default OrderList;
