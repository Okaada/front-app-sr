"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface Item {
  id: number;
  name: string;
  value: number;
  description: string;
  is_active: boolean;
}

const items: Item[] = [
  {
    id: 1,
    name: 'Item 1',
    value: 100,
    description: 'This is the first item.',
    is_active: true,
  },
  {
    id: 2,
    name: 'Item 2',
    value: 150,
    description: 'This is the second item.',
    is_active: false,
  },
  {
    id: 3,
    name: 'Item 3',
    value: 200,
    description: 'This is the third item.',
    is_active: true,
  },
];

const ItemsPage: React.FC = () => {
  const router = useRouter();

  const handleEditClick = (id: number) => {
    console.log("id");

    router.push(`/item/edit-item/${id}`)
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Items List</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left text-gray-900">Name</th>
                <th className="px-4 py-2 text-left text-gray-900">Value</th>
                <th className="px-4 py-2 text-left text-gray-900">Description</th>
                <th className="px-4 py-2 text-left text-gray-900">Status</th>
                <th className="px-4 py-2 text-left text-gray-900">Edit</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2 text-gray-900">{item.name}</td>
                  <td className="px-4 py-2 text-gray-900">${item.value}</td>
                  <td className="px-4 py-2 ">{item.description}</td>
                  <td className={`px-4 py-2 font-bold ${item.is_active ? 'text-green-600' : 'text-red-600'}`}>
                    {item.is_active ? 'Active' : 'Inactive'}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEditClick(item.id)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ItemsPage;
