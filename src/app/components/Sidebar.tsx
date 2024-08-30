import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <ul>
        <li className="mb-4">
          <Link href="/" className="hover:text-gray-400">
            Início
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/tab" className="hover:text-gray-400">
            Comandas
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/item" className="hover:text-gray-400">
            Items
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/item/create" className="hover:text-gray-400">
            Cadastrar Item
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/additional" className="hover:text-gray-400">
            Adicionais
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/additional/create" className="hover:text-gray-400">
            Cadastrar Adicional
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/order" className="hover:text-gray-400">
            Pedidos 
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/order/create" className="hover:text-gray-400">
            Adicionar Pedido
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/users" className="hover:text-gray-400">
            Usuários
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/adduser" className="hover:text-gray-400">
            Cadastrar usuário
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
