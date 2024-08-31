'use client';

import  React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import '../globals.css' // Certifique-se de que o caminho está correto


interface Additional {
  additional_id: number;
  name: string;
  value: number;
}

const AdditionalPage: React.FC = () => {
  const router = useRouter();
  const [additionals, setAdditional] = useState<Additional[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5063/api/Additional'); // Substitua pela URL da sua API
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data: Additional[] = await response.json();
  //       setAdditional(data);
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
        const mockData: Additional[] = [
          { additional_id: 1, name: 'Bacon', value: 10.99},
          { additional_id: 2, name: 'Calabresa', value: 10.99},
          { additional_id: 3, name: 'Arroz', value: 10.99},
        ];
  
        // Define os dados mockados no estado
        setAdditional(mockData);
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
    router.push(`/additional/edit-additional/${id}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Lista de adicioanis</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left text-gray-900">Nome</th>
                  <th className="px-4 py-2 text-left text-gray-900">Valor</th>
                  <th className="px-4 py-2 text-left text-gray-900">Editar</th>
                </tr>
              </thead>
              <tbody>
                {additionals.map((additional) => (
                  <tr key={additional.additional_id} className="border-t">
                    <td className="px-4 py-2 text-gray-900">{additional.name}</td>
                    <td className="px-4 py-2 text-gray-900">R${additional.value}</td>
                
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEditClick(additional.additional_id)}
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

export default AdditionalPage;
