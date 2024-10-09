// AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { message } from 'antd';
interface User {
    nome: string;
    sobrenome: string;
    usuario: string;
    senha: string;
}

interface AuthContextType {
    currentUser: User | null;
    login: (usuario: string, senha: string) => boolean;
    register: (user: User) => void;
    logout: () => void;
    forgotPassword: (usuario: string, novaSenha: string) => void; // Função de redefinição de senha
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const initialUsers: User[] = [
    { nome: 'João', sobrenome: 'Silva', usuario: 'joao123', senha: 'senha123' },
    { nome: 'Maria', sobrenome: 'Souza', usuario: 'maria123', senha: 'senha123' },
    { nome: 'Pedro', sobrenome: 'Lima', usuario: 'pedro123', senha: 'senha123' },
];
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>(initialUsers);
    
    const login = (usuario: string, senha: string): boolean => {
        const user = users.find(user => user.usuario === usuario && user.senha === senha);
        if (user) {
            setCurrentUser(user);
            return true; 
        }
        return false;
    };

    const register = (newUser: User) => {
        const userExists = users.some(user => user.usuario === newUser.usuario || user.senha === newUser.senha);
        
        if (userExists) {
            message.error('Este usuário já existe');
            return;
        }

        setUsers([...users, newUser]);
        setCurrentUser(newUser);
    };
    const forgotPassword = (usuario: string, novaSenha: string) => {
        const userIndex = users.findIndex((user) => user.usuario === usuario);

        if (userIndex !== -1) {
            const updatedUsers = [...users];
            updatedUsers[userIndex].senha = novaSenha;
            setUsers(updatedUsers);
            message.success('Senha redefinida com sucesso!');
        } else {
            message.error('Usuário não encontrado.');
        }
    };
    const logout = () => {
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, register, logout, forgotPassword  }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};