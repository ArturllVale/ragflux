import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
`;

const FormCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #ddd;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid ${props => props.$error ? '#e63946' : 'rgba(255, 255, 255, 0.2)'};
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
  }
`;

const ErrorMessage = styled.p`
  color: #e63946;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  background-color: #4361ee;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background-color: #3a56d4;
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const ForgotPassword = styled.div`
  margin-top: 1rem;
  text-align: right;
  
  a {
    color: #ddd;
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      color: #4361ee;
      text-decoration: underline;
    }
  }
`;

const RegisterLink = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  color: #ddd;
  
  a {
    color: #4361ee;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

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
    <LoginContainer>
      <FormCard>
        <Title>Entrar</Title>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="username">Nome de Usuário</Label>
            <Input 
              id="username"
              type="text" 
              placeholder="Digite seu nome de usuário"
              $error={!!errors.username}
              {...register('username')}
            />
            {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <Input 
              id="password"
              type="password" 
              placeholder="Digite sua senha"
              $error={!!errors.password}
              {...register('password')}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </FormGroup>
          
          <ForgotPassword>
            <Link to="/forgot-password">Esqueceu sua senha?</Link>
          </ForgotPassword>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </SubmitButton>
        </Form>
        
        <RegisterLink>
          Não tem uma conta? <Link to="/register">Criar conta</Link>
        </RegisterLink>
      </FormCard>
    </LoginContainer>
  );
};

export default Login;