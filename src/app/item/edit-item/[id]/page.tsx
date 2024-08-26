'use client';

import React, { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
  value: number;
  description: string;
  is_active: boolean;
}

// Mock data
const mockItems: Item[] = [
  { id: 1, name: 'Item 1', value: 100, description: 'This is the first item.', is_active: true },
  { id: 2, name: 'Item 2', value: 150, description: 'This is the second item.', is_active: false },
  { id: 3, name: 'Item 3', value: 200, description: 'This is the third item.', is_active: true },
];

// Function to fetch item based on ID
const fetchItem = (id: number): Item | undefined => {
  return mockItems.find(item => item.id === id);
};

const EditItemPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [item, setItem] = useState<Item | undefined>(undefined);

  useEffect(() => {
    const fetchedItem = fetchItem(parseInt(params.id, 10));
    setItem(fetchedItem);
  }, [params.id]);

  if (!item) {
    return <p>Item not found</p>;
  }

  const handleSave = () => {
    // Simulate saving data
    console.log('Saving item:', item);
    // Implement navigation to go back to the list of items
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Edit Item</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              defaultValue={item.name}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Value</label>
            <input
              type="number"
              defaultValue={item.value}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              defaultValue={item.description}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              defaultValue={item.is_active ? 'Active' : 'Inactive'}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditItemPage;
