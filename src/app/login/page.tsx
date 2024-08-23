"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null); // Reseta a mensagem de erro ao tentar logar novamente

    const token = await requestLogin();

    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
      router.push('/homepage');
    } else {
      router.push('/errorpage')
      setErrorMessage('Falha no login. Verifique suas credenciais.'); // Mostra a mensagem de erro
      console.log(errorMessage)
    }
  };

  const requestLogin = async () => {
    try {
      const response = await fetch('https://localhost:7092/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, // Certifique-se de que 'email' e 'password' estão definidos
          password: password,
        }),
      });

      if (response.status === 401) {
        setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
        console.log(errorMessage)
        return null; // Retorna null em caso de falha de autenticação
      }

      if (!response.ok) {
        throw new Error('Erro ao fazer login. Por favor, tente novamente.');
      }

      const result = await response.json();
      return result.token; // Retorna o token se a autenticação for bem-sucedida

    } catch (error) {
      setErrorMessage('Erro na conexão com o servidor. Por favor, tente mais tarde.');
      console.log(errorMessage)
      return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-900">Painel Administrativo</h2>
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <label className="relative flex justify-end w-full px-3 text-gray-900 sm:text-sm" htmlFor="resetPass">Esqueci a Senha</label>
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Entrar
            </button>
          </div>
        </form>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
