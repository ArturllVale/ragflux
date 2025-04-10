import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 255, 0.5);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #ddd;
  max-width: 800px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled(Link)`
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.$primary ? '#4361ee' : 'transparent'};
  color: #fff;
  border: ${props => props.$primary ? 'none' : '2px solid #4361ee'};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.$primary ? '#3a56d4' : 'rgba(67, 97, 238, 0.1)'};
    color: #fff;
    transform: translateY(-2px);
  }
`;

const FeatureSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
  max-width: 1200px;
`;

const FeatureCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  width: 300px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  color: #fff;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #bbb;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>RagFlux</Title>
      <Subtitle>
        Bem-vindo ao portal oficial do seu jogo favorito. Crie sua conta, faça login e comece sua aventura agora mesmo!
      </Subtitle>
      
      <ButtonContainer>
        <Button to="/register" $primary>Criar Conta</Button>
        <Button to="/login">Entrar</Button>
      </ButtonContainer>
      
      <FeatureSection>
        <FeatureCard>
          <FeatureTitle>Crie sua Conta</FeatureTitle>
          <FeatureDescription>
            Registre-se rapidamente para começar sua jornada no mundo de RagFlux.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle>Gerencie seu Perfil</FeatureTitle>
          <FeatureDescription>
            Acesse sua conta para gerenciar personagens e configurações.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle>Junte-se à Comunidade</FeatureTitle>
          <FeatureDescription>
            Conecte-se com outros jogadores e participe de eventos especiais.
          </FeatureDescription>
        </FeatureCard>
      </FeatureSection>
    </HomeContainer>
  );
};

export default Home;