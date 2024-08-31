'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import '../globals.css' // Certifique-se de que o caminho está correto

const orders = [
  {
    id: 1,
    name: 'Fulano',
    tableNumber: 5,
    total: 150.75,
    status: 'Aberta',
  },
  {
    id: 2,
    name: 'Ciclano',
    tableNumber: 3,
    total: 200.50,
    status: 'Fechada',
  },
  {
    id: 3,
    name: 'Beutrano',
    tableNumber: 8,
    total: 89.99,
    status: 'Aberta',
  },
];

const ComandaList: React.FC = () => {
  const handleEditClick = (orderId: number) => {
    console.log(`Edit comanda with ID: ${orderId}`);
    // Implementar lógica de edição
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Lista de Comandas</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left text-gray-900">Nome</th>
                  <th className="px-4 py-2 text-left text-gray-900">Número da Mesa</th>
                  <th className="px-4 py-2 text-left text-gray-900">Status</th>
                  <th className="px-4 py-2 text-left text-gray-900">Total</th>
                  <th className="px-4 py-2 text-left text-gray-900">Novo Pedido</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="px-4 py-2 text-gray-900">{order.name}</td>
                    <td className="px-4 py-2 text-gray-900">{order.tableNumber}</td>
                    <td className={`px-4 py-2 font-bold ${order.status === 'Aberta' ? 'text-green-600' : 'text-red-600'}`}>
                      {order.status}
                    </td>
                    <td className="px-4 py-2 text-gray-900">R${order.total.toFixed(2)}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEditClick(order.id)}
                        className="text-blue-600 hover:underline"
                      >
                        Inserir Pedido
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComandaList;
