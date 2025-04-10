import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Componente Register com Tailwind CSS

// Schema de validação com yup
const schema = yup.object().shape({
  username: yup.string()
    .required('Nome de usuário é obrigatório')
    .min(4, 'Nome de usuário deve ter pelo menos 4 caracteres')
    .max(23, 'Nome de usuário deve ter no máximo 23 caracteres')
    .matches(/^[a-zA-Z0-9_]+$/, 'Nome de usuário deve conter apenas letras, números e underline'),
  password: yup.string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
  confirmPassword: yup.string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas não conferem'),
  email: yup.string()
    .required('Email é obrigatório')
    .email('Email inválido')
    .max(39, 'Email deve ter no máximo 39 caracteres'),
  sex: yup.string()
    .required('Selecione o sexo')
    .oneOf(['M', 'F'], 'Selecione uma opção válida'),
  terms: yup.boolean()
    .oneOf([true], 'Você deve aceitar os termos para continuar')
});

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Aqui seria implementada a lógica de envio para o backend
      console.log('Dados do formulário:', data);
      
      // Simulando um delay de processamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirecionar para página de sucesso ou login
      alert('Conta criada com sucesso!');
      
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      alert('Erro ao criar conta. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-dark to-dark-light">
      <div className="bg-white/5 rounded-lg p-8 w-full max-w-xl backdrop-blur-md border border-white/10 shadow-lg">
        <h1 className="text-3xl mb-6 text-white text-center">Criar Conta</h1>
        
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
          
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-gray-300">Confirmar Senha</label>
            <input 
              id="confirmPassword"
              type="password" 
              placeholder="Confirme sua senha"
              className={`p-3 rounded border ${errors.confirmPassword ? 'border-red-500' : 'border-white/20'} bg-white/5 text-white focus:outline-none focus:border-primary transition-colors`}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-300">Email</label>
            <input 
              id="email"
              type="email" 
              placeholder="Digite seu email"
              className={`p-3 rounded border ${errors.email ? 'border-red-500' : 'border-white/20'} bg-white/5 text-white focus:outline-none focus:border-primary transition-colors`}
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-gray-300">Sexo</label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input 
                  type="radio" 
                  value="M" 
                  className="cursor-pointer"
                  {...register('sex')} 
                />
                Masculino
              </label>
              
              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input 
                  type="radio" 
                  value="F" 
                  className="cursor-pointer"
                  {...register('sex')} 
                />
                Feminino
              </label>
            </div>
            {errors.sex && <p className="text-red-500 text-sm mt-1">{errors.sex.message}</p>}
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mt-2">
              <input 
                id="terms" 
                type="checkbox" 
                className="cursor-pointer"
                {...register('terms')} 
              />
              <label htmlFor="terms" className="text-gray-300 cursor-pointer">
                Eu li e aceito os <Link to="/terms" className="text-primary hover:underline">Termos de Uso</Link> e <Link to="/privacy" className="text-primary hover:underline">Política de Privacidade</Link>
              </label>
            </div>
            {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="p-3 bg-primary text-white rounded font-semibold mt-4 transition-colors hover:bg-secondary disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Criando conta...' : 'Criar Conta'}
          </button>
        </form>
        
        <div className="mt-6 text-center text-gray-300">
          Já tem uma conta? <Link to="/login" className="text-primary font-semibold hover:underline">Faça login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;