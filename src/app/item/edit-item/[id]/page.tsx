'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../../components/Sidebar';
import '../../../globals.css'  // Certifique-se de que o caminho está correto


interface Item {
  item_id: number;
  name: string;
  value: number;
  description: string;
  is_active: boolean;
}

// Function to fetch item based on ID from backend
const fetchItem = async (id: number): Promise<Item | undefined> => {
  try {
    const response = await fetch(`http://localhost:5063/api/Item/${id}`); // Substitua pelo endpoint correto da sua API
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data: Item = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch item:', error);
    return undefined;
  }
};

const EditItemPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [item, setItem] = useState<Item | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const getItem = async () => {
      const fetchedItem = await fetchItem(parseInt(params.id, 10));
      setItem(fetchedItem);
    };

    getItem();
  }, [params.id]);

  const handleSave = () => {
    // Simulate saving data
    console.log('Saving item:', item);
    // Implement navigation to go back to the list of items
  };

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Editar {item.name}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900">Nome</label>
              <input
                type="text"
                defaultValue={item.name}
                className="mt-1 block w-full  text-gray-900 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">Valor</label>
              <input
                type="number"
                defaultValue={item.value}
                className="mt-1 block w-full text-gray-900 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">Descrição</label>
              <textarea
                defaultValue={item.description}
                className="mt-1 block w-full text-gray-900 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                defaultValue={item.is_active ? 'Active' : 'Inactive'}
                className="mt-1 block w-full text-gray-900 border-gray-300 rounded-md shadow-sm"
              >
                <option value="Active">Ativo</option>
                <option value="Inactive">Inativo</option>
              </select>
            </div>
            <button
              onClick={handleSave}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditItemPage;
