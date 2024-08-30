import Head from 'next/head';
import '../globals.css'
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Painel Administrativo</title>
        <meta name="description" content="Uma homepage básica usando Next.js e Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Bem-vindo à Minha Homepage</h1>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow p-8">
        <h2 className="text-2xl font-semibold mb-4">Sobre Nós</h2>
        <p>
          Esta é uma homepage básica construída com Next.js e Tailwind CSS. Você pode usar esta estrutura para começar seu próprio projeto.
        </p>
        <p className="mt-4">
          O Next.js é um framework poderoso para React que permite renderização do lado do servidor, geração de sites estáticos e muito mais!
        </p>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Minha Homepage. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
