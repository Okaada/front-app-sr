// pages/index.tsx
'use client';

import React from 'react';
import './globals.css';
import { useRouter } from 'next/navigation';


const Home: React.FC = () => {
  const router = useRouter();

  const handleLogInClick = () => {
    router.push(`/login`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Cabeçalho */}
      <header className="bg-blue-600 w-full py-4 shadow-md">
        <div className="container flex flex-row items-center justify-between mx-auto px-4 text-white">
          <h1 className="text-3xl font-bold flex-grow text-center">Restaurante</h1>
          <button onClick={() => handleLogInClick()} className="ml-auto">Log In</button>
        </div>

      </header>

      {/* Seção Sobre */}
      <section className="flex-grow container mx-auto my-8 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sobre Nós</h2>
        <p className="text-gray-600">
          Somos um estabelecimento dedicado a [descrição breve do estabelecimento]. Nossa missão é [missão do estabelecimento].
        </p>
      </section>

      {/* Seção Contato */}
      <section className="container mx-auto mb-8 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contato</h2>
        <p className="text-gray-600">
          Entre em contato conosco pelo telefone [número de telefone] ou email [email@example.com].
        </p>
      </section>

      {/* Rodapé */}
      <footer className="bg-blue-600 w-full py-4 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Nome do Estabelecimento. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
