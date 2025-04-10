import axios from 'axios';
import dbConfig from '../config/database';

// Criação da instância do axios para comunicação com o backend
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor para adicionar token de autenticação nas requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Funções para autenticação e registro
export const authService = {
  // Login de usuário
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Erro ao fazer login' };
    }
  },
  
  // Registro de novo usuário
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Erro ao registrar usuário' };
    }
  },
  
  // Logout de usuário
  logout: () => {
    localStorage.removeItem('authToken');
  },
  
  // Verificar se usuário está autenticado
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  },
  
  // Recuperar informações do usuário logado
  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Erro ao obter dados do usuário' };
    }
  }
};

export default api;