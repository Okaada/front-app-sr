'use client';
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import '../../globals.css' // Certifique-se de que o caminho está correto

const ComandaOrderForm: React.FC = () => {
  const [order, setOrder] = useState({
    comanda: '',
    item: '',
    quantity: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Pedido enviado:', order);
    // Lógica de envio do pedido
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Incluir Pedido</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="comanda" className="block text-gray-900 font-bold mb-2">
                Comanda
              </label>
              <select
                id="comanda"
                name="comanda"
                value={order.comanda}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione a comanda</option>
                <option value="Comanda 001">Comanda 001</option>
                <option value="Comanda 002">Comanda 002</option>
                <option value="Comanda 003">Comanda 003</option>
                {/* Adicione outras comandas aqui */}
              </select>
            </div>

            <div>
              <label htmlFor="item" className="block text-gray-900 font-bold mb-2">
                Item
              </label>
              <select
                id="item"
                name="item"
                value={order.item}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione o item</option>
                <option value="Item 001">Item 001</option>
                <option value="Item 002">Item 002</option>
                <option value="Item 003">Item 003</option>
                {/* Adicione outros itens aqui */}
              </select>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
                Quantidade
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={order.quantity}
                onChange={handleChange}
                className="w-full px-4 py-2 border  text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Incluir Pedido
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ComandaOrderForm;
