import React, { createContext } from 'react';
import useCart from '../../Hooks/useCart';
import useFirebase from '../../Hooks/useFirebase';

export const ContextData = createContext();

const ContextProvider = ({ children }) => {
    const firebase = useFirebase();
    const cart = useCart();
    const allContext = { ...firebase, ...cart };
    return (
        <ContextData.Provider value={allContext}>
            {children}
        </ContextData.Provider>
    );
};

export default ContextProvider;