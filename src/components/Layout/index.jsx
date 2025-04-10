import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  text-shadow: 0 0 10px rgba(0, 0, 255, 0.3);
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
    top: 100%;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    max-width: 300px;
    height: calc(100vh - 60px);
    padding: 2rem;
    gap: 2rem;
    transition: right 0.3s ease-in-out;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: #ddd;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4361ee;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
  }
`;

const HamburgerLine = styled.span`
  width: 100%;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease;
  border-radius: 2px;
  
  &:nth-child(1) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
  }
  
  &:nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    transform: ${({ isOpen }) => isOpen ? 'translateX(-20px)' : 'translateX(0)'};
  }
  
  &:nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'rotate(0)'};
  }
`;

const MainContent = styled.main`
  min-height: 100vh;
  padding-top: 0;
  width: 100%;
`;

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterText = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FooterLink = styled(Link)`
  color: #ddd;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    color: #4361ee;
    text-decoration: underline;
  }
`;

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <HeaderContainer>
        <Logo to="/">RagFlux</Logo>
        <HamburgerButton onClick={toggleMenu}>
          <HamburgerLine isOpen={isMenuOpen} />
          <HamburgerLine isOpen={isMenuOpen} />
          <HamburgerLine isOpen={isMenuOpen} />
        </HamburgerButton>
        <Nav isOpen={isMenuOpen}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/register" onClick={() => setIsMenuOpen(false)}>Criar Conta</NavLink>
          <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>Entrar</NavLink>
        </Nav>
      </HeaderContainer>
      
      <MainContent>
        {children}
      </MainContent>
      
      <FooterContainer>
        <FooterText>© {new Date().getFullYear()} RagFlux. Todos os direitos reservados.</FooterText>
        <FooterLinks>
          <FooterLink to="/terms">Termos de Uso</FooterLink>
          <FooterLink to="/privacy">Política de Privacidade</FooterLink>
          <FooterLink to="/contact">Contato</FooterLink>
        </FooterLinks>
      </FooterContainer>
    </>
  );
};

export default Layout;