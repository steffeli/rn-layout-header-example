import React, { createContext, PropsWithChildren, useContext } from 'react';

// Create a context for the authentication state
const AuthContext = createContext<boolean | null>(null);

// Custom hook to access the authentication state
export function useIsAuthenticated(): boolean {
    const isAuthenticated = useContext(AuthContext);
    if (isAuthenticated === null) {
        throw new Error('useIsAuthenticated must be used within an AuthProvider');
    }
    return isAuthenticated;
}

// Custom hook to access the inverse of the authentication state
export function useIsUnauthenticated(): boolean {
    const isAuthenticated = useIsAuthenticated();
    return !isAuthenticated;
}

// AuthProvider component
export const NavigationProvider: React.FC<PropsWithChildren> = ({ children }) => {
    // Replace this with your actual authentication logic
    const isAuthenticated = true;

    return (
        <AuthContext.Provider value={isAuthenticated}>
            {children}
        </AuthContext.Provider>
    );
};