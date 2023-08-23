import { createContext, useContext, useReducer } from 'react';

const SelectedProductsContext = createContext();

const selectedProductsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SELECTED_PRODUCT':
            return [...state, action.payload];
        case 'REMOVE_SELECTED_PRODUCT':
            return state.filter(product => product.id !== action.payload.id);
        default:
            return state;
    }
};

export const saveSelectedProducts = (selectedProducts) => {
    return {
        type: 'SAVE_SELECTED_PRODUCTS',
        payload: selectedProducts,
    };
};

const SelectedProductsProvider = ({ children }) => {
    const [selectedProducts, dispatch] = useReducer(selectedProductsReducer, []);

    return (
        <SelectedProductsContext.Provider value={{ selectedProducts, dispatch }}>
            {children}
        </SelectedProductsContext.Provider>
    );
};

const useSelectedProducts = () => {
    const context = useContext(SelectedProductsContext);
    if (context === undefined) {
        throw new Error('useSelectedProducts must be used within a SelectedProductsProvider');
    }
    return context;
};

export { SelectedProductsProvider, useSelectedProducts };
