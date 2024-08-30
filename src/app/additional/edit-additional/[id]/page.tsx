'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../../components/Sidebar';
import '../../../globals.css' // Certifique-se de que o caminho está correto


interface Additional {
    id: number;
    name: string;
    value: number;
  }  

// Function to fetch item based on ID from backend
const fetchAdditional = async (id: number): Promise<Additional | undefined> => {
  try {
    const response = await fetch(`http://localhost:5063/api/Additional/${id}`); // Substitua pelo endpoint correto da sua API
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data: Additional = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch additional:', error);
    return undefined;
  }
};

const EditItemPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [adttional, setItem] = useState<Additional | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const getAdditional = async () => {
      const fetchedAdditional = await fetchAdditional(parseInt(params.id, 10));
      setItem(fetchedAdditional);
    };

    getAdditional();
  }, [params.id]);

  const handleSave = () => {
    // Simulate saving data
    console.log('Saving additional:', adttional);
    // Implement navigation to go back to the list of items
  };

  if (!adttional) {
    return <p>Additional not found</p>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Editar {adttional.name}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900">Nome</label>
              <input
                type="text"
                defaultValue={adttional.name}
                className="mt-1 block w-full  text-gray-900 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">Valor</label>
              <input
                type="number"
                defaultValue={adttional.value}
                className="mt-1 block w-full text-gray-900 border-gray-300 rounded-md shadow-sm"
              />
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
