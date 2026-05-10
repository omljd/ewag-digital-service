import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  signup: (email: string, pass: string, name: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for mock session
    const savedUser = localStorage.getItem('ewag_admin_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, pass: string) => {
    // Mock login
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email && pass) {
          const mockUser = { email, name: email.split('@')[0] };
          setUser(mockUser);
          localStorage.setItem('ewag_admin_user', JSON.stringify(mockUser));
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const signup = async (email: string, pass: string, name: string) => {
    // Mock signup
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email && pass && name) {
          const mockUser = { email, name };
          setUser(mockUser);
          localStorage.setItem('ewag_admin_user', JSON.stringify(mockUser));
          resolve();
        } else {
          reject(new Error('All fields are required'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ewag_admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
