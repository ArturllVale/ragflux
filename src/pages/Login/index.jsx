import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Componente Login com Tailwind CSS

// Schema de validação com yup
const schema = yup.object().shape({
  username: yup.string()
    .required('Nome de usuário é obrigatório'),
  password: yup.string()
    .required('Senha é obrigatória')
});

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Aqui seria implementada a lógica de autenticação
      console.log('Dados de login:', data);
      
      // Simulando um delay de processamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirecionar para página do painel
      alert('Login realizado com sucesso!');
      
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-dark to-dark-light">
      <div className="bg-white/5 rounded-lg p-8 w-full max-w-md backdrop-blur-md border border-white/10 shadow-lg">
        <h1 className="text-3xl mb-6 text-white text-center">Entrar</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-gray-300">Nome de Usuário</label>
            <input 
              id="username"
              type="text" 
              placeholder="Digite seu nome de usuário"
              className={`p-3 rounded border ${errors.username ? 'border-red-500' : 'border-white/20'} bg-white/5 text-white focus:outline-none focus:border-primary transition-colors`}
              {...register('username')}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-300">Senha</label>
            <input 
              id="password"
              type="password" 
              placeholder="Digite sua senha"
              className={`p-3 rounded border ${errors.password ? 'border-red-500' : 'border-white/20'} bg-white/5 text-white focus:outline-none focus:border-primary transition-colors`}
              {...register('password')}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          
          <div className="text-right mt-4">
            <Link to="/forgot-password" className="text-gray-300 text-sm hover:text-primary hover:underline">Esqueceu sua senha?</Link>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="px-6 py-3 bg-transparent text-sky-400 border-2 border-primary rounded font-semibold transition-all hover:bg-primary/10 hover:-translate-y-1"
          >
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        
        <div className="mt-6 text-center text-gray-300">
          Não tem uma conta? <Link to="/register" className="text-primary font-semibold hover:underline">Crie uma agora</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;