import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fechar a sidebar quando mudar de página em dispositivos móveis
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  // Verificar se o link está ativo
  const isActive = (path) => {
    return location.pathname === path ? true : false;
  };

  return (
    <div className="layout-container">
      {/* Sidebar para desktop */}
      <aside className="sidebar-desktop">
        <div className="sidebar-logo-container">
          <Link to="/" className="sidebar-logo">
            <span className="logo-text">RagFlux</span>
          </Link>
        </div>
        
        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'nav-link-active' : 'nav-link-inactive'}`}
              >
                <svg className={`nav-icon ${isActive('/') ? 'nav-icon-active' : 'nav-icon-inactive'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
                {isActive('/') && <span className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></span>}
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/register"
                className={`nav-link ${isActive('/register') ? 'nav-link-active' : 'nav-link-inactive'}`}
              >
                <svg className={`nav-icon ${isActive('/register') ? 'nav-icon-active' : 'nav-icon-inactive'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span>Criar Conta</span>
                {isActive('/register') && <span className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></span>}
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/login"
                className={`nav-link ${isActive('/login') ? 'nav-link-active' : 'nav-link-inactive'}`}
              >
                <svg className={`nav-icon ${isActive('/login') ? 'nav-icon-active' : 'nav-icon-inactive'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Entrar</span>
                {isActive('/login') && <span className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></span>}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Header mobile com botão para abrir sidebar */}
      <header className={`header-mobile ${scrolled ? 'header-scrolled' : 'header-default'}`}>
        <div className="flex items-center justify-between mx-auto px-6">
          <Link to="/" className="flex items-center space-x-3 group">
            <span className="self-center text-2xl font-extrabold whitespace-nowrap text-primary tracking-tight group-hover:text-secondary transition-all duration-300 drop-shadow-[0_0_8px_rgba(67,97,238,0.5)]">RagFlux</span>
          </Link>

          <button
            onClick={toggleSidebar}
            className="toggle-button"
            aria-expanded={isSidebarOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Abrir menu principal</span>
            <div className="relative w-5 h-5 flex flex-col justify-center items-center">
              <span className={`absolute h-0.5 bg-white rounded-sm transform transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-5 rotate-45' : 'w-5 -translate-y-1.5'}`}></span>
              <span className={`absolute h-0.5 w-5 bg-white rounded-sm transform transition-all duration-300 ease-in-out ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 bg-white rounded-sm transform transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-5 -rotate-45' : 'w-5 translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Sidebar mobile */}
      <div 
        className={`${isSidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} fixed top-0 left-0 h-screen w-72 z-50 transition-all duration-300 ease-in-out transform md:hidden`}
      >
        <div className="h-full w-full bg-dark/95 backdrop-blur-md shadow-2xl flex flex-col items-start justify-start pt-16 px-4 border-r border-white/10">
          <button 
            onClick={toggleSidebar} 
            className="close-button"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="mb-8 w-full text-center border-b border-white/10 pb-4">
            <Link to="/" className="flex items-center justify-center space-x-3 group">
              <span className="self-center text-2xl font-extrabold whitespace-nowrap text-primary tracking-tight group-hover:text-secondary transition-all duration-300 drop-shadow-[0_0_8px_rgba(67,97,238,0.5)]">RagFlux</span>
            </Link>
          </div>
          
          <nav className="w-full">
            <ul className="font-medium flex flex-col w-full space-y-2">
              <li className="w-full">
                <Link
                  to="/"
                  className={`nav-link ${isActive('/') ? 'nav-link-active' : 'nav-link-inactive'}`}
                >
                  <svg className={`nav-icon ${isActive('/') ? 'nav-icon-active' : 'nav-icon-inactive'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Home</span>
                  {isActive('/') && <span className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></span>}
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/register"
                  className={`nav-link ${isActive('/register') ? 'nav-link-active' : 'nav-link-inactive'}`}
                >
                  <svg className={`nav-icon ${isActive('/register') ? 'nav-icon-active' : 'nav-icon-inactive'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <span>Criar Conta</span>
                  {isActive('/register') && <span className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></span>}
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/login"
                  className={`nav-link ${isActive('/login') ? 'nav-link-active' : 'nav-link-inactive'}`}
                >
                  <svg className={`nav-icon ${isActive('/login') ? 'nav-icon-active' : 'nav-icon-inactive'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Entrar</span>
                  {isActive('/login') && <span className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></span>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Overlay para fechar a sidebar ao clicar fora */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" 
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      <div className="flex-1 overflow-auto h-screen">
        <main className="min-h-screen w-full pt-24 md:pt-8 md:pl-64 px-4 md:px-8">
          {children}
        </main>

        <footer className="bg-gradient-to-r from-dark to-dark-light p-8 text-center border-t border-white/5 md:ml-64 backdrop-blur-sm">
          <p className="text-gray-400 text-sm mb-4">© {new Date().getFullYear()} RagFlux. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 mt-4 md:flex-row flex-col md:gap-8">
            <Link to="/terms" className="footer-link">Termos de Uso</Link>
            <Link to="/privacy" className="footer-link">Política de Privacidade</Link>
            <Link to="/contact" className="footer-link">Contato</Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;