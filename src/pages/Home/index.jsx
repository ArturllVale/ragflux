import React from 'react';
import { Link } from 'react-router-dom';

// Componente Home com Tailwind CSS

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gradient-to-br from-dark to-dark-light">
      <h1 className="text-5xl mb-4 text-white drop-shadow-[0_0_10px_rgba(0,0,255,0.5)]">RagFlux</h1>
      <p className="text-xl mb-8 text-gray-300 max-w-3xl">
        Bem-vindo ao portal oficial do seu favorito. Crie sua conta, faça login e comece sua aventura agora mesmo!
      </p>
      
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        <Link to="/register" className="px-6 py-3 bg-primary text-white rounded font-semibold transition-all hover:bg-secondary hover:-translate-y-1">
          Criar Conta
        </Link>
        <Link to="/login" className="px-6 py-3 bg-transparent text-white border-2 border-primary rounded font-semibold transition-all hover:bg-primary/10 hover:-translate-y-1">
          Entrar
        </Link>
      </div>
      
      <section className="flex flex-wrap justify-center gap-8 mt-16 max-w-7xl">
        <div className="bg-white/5 rounded-lg p-6 w-[300px] backdrop-blur-md border border-white/10 transition-transform hover:-translate-y-2">
          <h3 className="text-white mb-4 text-xl font-medium">Crie sua Conta</h3>
          <p className="text-gray-400">
            Registre-se rapidamente para começar sua jornada no mundo de RagFlux.
          </p>
        </div>
        
        <div className="bg-white/5 rounded-lg p-6 w-[300px] backdrop-blur-md border border-white/10 transition-transform hover:-translate-y-2">
          <h3 className="text-white mb-4 text-xl font-medium">Gerencie seu Perfil</h3>
          <p className="text-gray-400">
            Acesse sua conta para gerenciar personagens e configurações.
          </p>
        </div>
        
        <div className="bg-white/5 rounded-lg p-6 w-[300px] backdrop-blur-md border border-white/10 transition-transform hover:-translate-y-2">
          <h3 className="text-white mb-4 text-xl font-medium">Junte-se à Comunidade</h3>
          <p className="text-gray-400">
            Conecte-se com outros jogadores e participe de eventos especiais.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;