import { Screens } from 'navigation/Screens';
import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

type NavigationState = {
    isAuthenticated: boolean;
    initialRouteName: string;
}

// Create a context for the authentication state
const NavigationContext = createContext<NavigationState | undefined>(undefined);

// Custom hook to access the authentication state
export function useIsAuthenticated(): boolean {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('Context must be used within provider');
    }
    return context.isAuthenticated;
}

// Custom hook to access the inverse of the authentication state
export function useIsUnauthenticated(): boolean {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('Context must be used within provider');
    }
    return !context.isAuthenticated;
}

export const useInitialRouteName = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('Context must be used within provider');
    }
    return context.initialRouteName
}

// AuthProvider component
export const NavigationProvider: React.FC<PropsWithChildren> = ({ children }) => {
    // Replace this with your actual authentication logic
    const [initialRouteName, setInitialRouteName] = useState(Screens.BANK_INTRO);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <NavigationContext.Provider value={{ isAuthenticated, initialRouteName }}>
            {children}
        </NavigationContext.Provider>
    );
};