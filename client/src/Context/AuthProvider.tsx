import React, { createContext, useContext, useState } from 'react';
import { message } from 'antd';
import axios from 'axios';

interface User {
  id?: number;
  nome: string;
  sobrenome: string;
  usuario: string;
  senha: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (usuario: string, senha: string) => void;
  register: (user: User) => void;
  logout: () => void;
  forgotPassword: (usuario: string, novaSenha: string) => void;
}

const API_URL = 'http://localhost:3000'; 

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = async (usuario: string, senha: string): Promise<void> => {
    try {
      const response = await axios.post(`${API_URL}/usuarios/login`, { usuario, senha });
      if (response.status === 200) {
        setCurrentUser(response.data);
        message.success('Login realizado com sucesso');
      }
    } catch (error) {
      message.error('Falha ao realizar login. Verifique suas credenciais.');
    }
  };

  const register = async (newUser: User): Promise<void> => {
    try {
      const response = await axios.post(`${API_URL}/usuarios`, newUser);
      if (response.status === 201) {
        setCurrentUser(response.data);
        message.success('Usuário registrado com sucesso!');
      }
    } catch (error) {
      message.error('Erro ao registrar usuário. Tente novamente.');
    }
  };

  const forgotPassword = async (usuario: string, novaSenha: string): Promise<void> => {
    try {
      const response = await axios.put(`${API_URL}/usuarios/${usuario}/senha`, { novaSenha });
      if (response.status === 200) {
        message.success('Senha redefinida com sucesso!');
      }
    } catch (error) {
      message.error('Erro ao redefinir a senha.');
    }
  };

  const logout = (): void => {
    setCurrentUser(null);
    message.success('Logout realizado com sucesso');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};