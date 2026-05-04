import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('vieworaUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse saved user:', error);
      }
    }
    setLoading(false);
  }, []);

  const signup = (email, password, name) => {
    if (!email || !password || !name) {
      throw new Error('All fields are required');
    }
    
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      createdAt: new Date().toISOString(),
    };
    
    setUser(newUser);
    localStorage.setItem('vieworaUser', JSON.stringify(newUser));
    return newUser;
  };

  const login = (email, password) => {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    
    // For demo purposes, accept any email/password combination
    const loginUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0],
      createdAt: new Date().toISOString(),
    };
    
    setUser(loginUser);
    localStorage.setItem('vieworaUser', JSON.stringify(loginUser));
    return loginUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vieworaUser');
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('vieworaUser', JSON.stringify(updatedUser));
    return updatedUser;
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
