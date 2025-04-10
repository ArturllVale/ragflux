import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const RegisterContainer = styled.div`
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
  max-width: 500px;
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

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ddd;
  cursor: pointer;
`;

const RadioInput = styled.input`
  cursor: pointer;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const CheckboxLabel = styled.label`
  color: #ddd;
  cursor: pointer;
  
  a {
    color: #4361ee;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CheckboxInput = styled.input`
  cursor: pointer;
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

const LoginLink = styled.div`
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
    <RegisterContainer>
      <FormCard>
        <Title>Criar Conta</Title>
        
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
          
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirmar Senha</Label>
            <Input 
              id="confirmPassword"
              type="password" 
              placeholder="Confirme sua senha"
              $error={!!errors.confirmPassword}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="Digite seu email"
              $error={!!errors.email}
              {...register('email')}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label>Sexo</Label>
            <RadioGroup>
              <RadioLabel>
                <RadioInput 
                  type="radio" 
                  value="M" 
                  {...register('sex')} 
                />
                Masculino
              </RadioLabel>
              
              <RadioLabel>
                <RadioInput 
                  type="radio" 
                  value="F" 
                  {...register('sex')} 
                />
                Feminino
              </RadioLabel>
            </RadioGroup>
            {errors.sex && <ErrorMessage>{errors.sex.message}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <CheckboxGroup>
              <CheckboxInput 
                id="terms" 
                type="checkbox" 
                {...register('terms')} 
              />
              <CheckboxLabel htmlFor="terms">
                Eu li e aceito os <Link to="/terms">Termos de Uso</Link> e <Link to="/privacy">Política de Privacidade</Link>
              </CheckboxLabel>
            </CheckboxGroup>
            {errors.terms && <ErrorMessage>{errors.terms.message}</ErrorMessage>}
          </FormGroup>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Criando conta...' : 'Criar Conta'}
          </SubmitButton>
        </Form>
        
        <LoginLink>
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </LoginLink>
      </FormCard>
    </RegisterContainer>
  );
};

export default Register;