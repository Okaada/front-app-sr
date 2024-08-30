'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import '../globals.css'

const UserList: React.FC = () => {
  const users = [
    { id: 1, name: 'João Silva', email: 'joao@example.com', role: 'Admin' },
    { id: 2, name: 'Maria Souza', email: 'maria@example.com', role: 'Editor' },
    { id: 3, name: 'Carlos Santos', email: 'carlos@example.com', role: 'Viewer' },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Lista de Usuários</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left text-gray-900">Nome</th>
                  <th className="px-4 py-2 text-left text-gray-900">Email</th>
                  <th className="px-4 py-2 text-left text-gray-900">Papel</th>
                  <th className="px-4 py-2 text-left text-gray-900">Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="px-4 py-2 text-gray-900">{user.name}</td>
                    <td className="px-4 py-2 text-gray-900">{user.email}</td>
                    <td className="px-4 py-2 text-gray-900">{user.role}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => console.log('Editar', user.id)}
                        className="text-blue-600 hover:underline"
                      >
                        Editar
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

export default UserList;
