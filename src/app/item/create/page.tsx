'use client';
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import '../../globals.css'  // Certifique-se de que o caminho está correto

interface ItemAdd {
    name: string;
    value: number;
    description: string;
}

const ItemRegistrationForm: React.FC = () => {
    const [item, setItem] = useState<ItemAdd>({
        name: '',
        value: 0,
        description: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
    
        if (type === 'checkbox') {
          const { checked } = e.target as HTMLInputElement; // Verifica explicitamente como HTMLInputElement para acessar 'checked'
          setItem({
            ...item,
            [name]: checked,
          });
        } else {
          setItem({
            ...item,
            [name]: value,
          });
        }
      };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5063/api/Item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar item');
            }

            const data = await response.json();
            console.log('Item cadastrado com sucesso:', data);

            setItem({
                name: '',
                value: 0,
                description: '',
            });

        } catch (err: any) {
            setError(err.message);
            console.error('Erro:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 bg-gray-100">
                <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Cadastrar Item</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={item.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="value" className="block text-gray-700 font-bold mb-2">
                                Valor
                            </label>
                            <input
                                type="number"
                                id="value"
                                name="value"
                                value={item.value}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                min="0"
                                step="0.01"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                                Descrição
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={item.description}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={4}
                            />
                        </div>


                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Cadastrar Item
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ItemRegistrationForm;
