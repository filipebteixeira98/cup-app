import { ReactNode, createContext } from 'react';

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {
    return;
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: 'Filipe Teixeira',
          avatarUrl: 'https://github.com/filipebteixeira98.png',
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
