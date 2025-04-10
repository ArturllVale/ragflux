import React, { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../services/api';
import dbConfig from '../config/database';

// Criação do contexto de autenticação
const AuthContext = createContext(null);

// Provider do contexto de autenticação
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Configuração do hCaptcha
  const hCaptchaEnabled = dbConfig.enableHCaptcha;
  const hCaptchaSiteKey = dbConfig.hCaptchaSiteKey;
  
  // Verificar se o usuário está autenticado ao carregar a aplicação
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        if (authService.isAuthenticated()) {
          const userData = await authService.getCurrentUser();
          setCurrentUser(userData);
        }
      } catch (err) {
        console.error('Erro ao verificar autenticação:', err);
        authService.logout();
      } finally {
        setLoading(false);
      }
    };
    
    checkAuthStatus();
  }, []);
  
  // Função para login
  const login = async (credentials) => {
    try {
      setError(null);
      setLoading(true);
      const userData = await authService.login(credentials);
      setCurrentUser(userData.user);
      return userData;
    } catch (err) {
      setError(err.message || 'Falha na autenticação');
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  // Função para registro
  const register = async (userData) => {
    try {
      setError(null);
      setLoading(true);
      const result = await authService.register(userData);
      return result;
    } catch (err) {
      setError(err.message || 'Falha no registro');
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  // Função para logout
  const logout = () => {
    authService.logout();
    setCurrentUser(null);
  };
  
  // Valores disponibilizados pelo contexto
  const value = {
    currentUser,
    loading,
    error,
    login,
    register,
    logout,
    hCaptchaEnabled,
    hCaptchaSiteKey
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export default AuthContext;