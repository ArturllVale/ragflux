import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:px-8 bg-black/30 backdrop-blur-md border-b border-white/10">
        <Link to="/" className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,0,255,0.3)]">RagFlux</Link>
        
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-2 z-[101]"
        >
          <span className={`w-full h-[3px] bg-white rounded-sm transition-all ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`w-full h-[3px] bg-white rounded-sm transition-all ${isMenuOpen ? 'opacity-0 -translate-x-5' : ''}`}></span>
          <span className={`w-full h-[3px] bg-white rounded-sm transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
        
        <nav className={`flex md:flex-row md:gap-6 md:static md:w-auto md:h-auto md:bg-transparent md:p-0 md:border-0 md:translate-x-0
          absolute flex-col gap-8 top-full right-0 w-[70%] max-w-[300px] h-[calc(100vh-60px)] p-8 
          bg-black/90 border-l border-white/10 transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-primary transition-colors md:text-base text-lg font-medium">Home</Link>
          <Link to="/register" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-primary transition-colors md:text-base text-lg font-medium">Criar Conta</Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-primary transition-colors md:text-base text-lg font-medium">Entrar</Link>
        </nav>
      </header>
      
      <main className="min-h-screen w-full">
        {children}
      </main>
      
      <footer className="bg-black/50 p-8 text-center border-t border-white/10">
        <p className="text-gray-400 text-sm mb-4">© {new Date().getFullYear()} RagFlux. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mt-4 md:flex-row flex-col md:gap-6">
          <Link to="/terms" className="text-gray-300 hover:text-primary hover:underline text-sm">Termos de Uso</Link>
          <Link to="/privacy" className="text-gray-300 hover:text-primary hover:underline text-sm">Política de Privacidade</Link>
          <Link to="/contact" className="text-gray-300 hover:text-primary hover:underline text-sm">Contato</Link>
        </div>
      </footer>
    </>
  );
};

export default Layout;