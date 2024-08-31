'use client';

import  React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import '../globals.css'


interface Item {
  item_id: number;
  name: string;
  value: number;
  description: string;
  is_active: boolean;
}


const ItemsPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5063/api/Item'); // Substitua pela URL da sua API
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data: Item[] = await response.json();
  //       setItems(data);
  //     } catch (error: any) {
  //       router.push('/errorpage')
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchItems();
  // }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Simula um atraso de rede
        await new Promise((resolve) => setTimeout(resolve, 1000));
  
        // Dados mockados
        const mockData: Item[] = [
          { item_id: 1, name: 'Marmitex', value: 10.99, description: "Teste", is_active: true },
          { item_id: 2, name: 'Salgado', value: 10.99, description: "Teste", is_active: true },
          { item_id: 3, name: 'Doce', value: 10.99, description: "Teste", is_active: true },
        ];
  
        // Define os dados mockados no estado
        setItems(mockData);
      } catch (error: any) {
        router.push('/errorpage');
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchItems();
  }, []);
  

  const handleEditClick = (id: number) => {
    router.push(`/item/edit-item/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Lista de Itens</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left text-gray-900">Nome</th>
                  <th className="px-4 py-2 text-left text-gray-900">Valor</th>
                  <th className="px-4 py-2 text-left text-gray-900">Descrição</th>
                  <th className="px-4 py-2 text-left text-gray-900">Status</th>
                  <th className="px-4 py-2 text-left text-gray-900">Editar</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.item_id} className="border-t">
                    <td className="px-4 py-2 text-gray-900">{item.name}</td>
                    <td className="px-4 py-2 text-gray-900">R${item.value}</td>
                    <td className="px-4 py-2 text-gray-900">{item.description}</td>
                    <td className={`px-4 py-2 font-bold ${item.is_active ? 'text-green-600' : 'text-red-600'}`}>
                      {item.is_active ? 'Ativo' : 'Inativo'}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEditClick(item.item_id)}
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

export default ItemsPage;
