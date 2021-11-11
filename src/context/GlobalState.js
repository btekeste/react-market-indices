import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    assets: [
        { id: 1, ticker: 'SPX', description: 'S&P 500 INDEX',
            lastPrice: 4463.21, changePercentage: 0.56, changeValue: 24.96 },
        { id: 2, ticker: 'DJID', description: 'DOW JONES INDUSTRIAL AVERAGE INDEX',
            lastPrice: 35186.45, changePercentage: 0.78, changeValue: 273.88 },
        { id: 3, ticker: 'NDXD', description: 'NASDAQ 100 INDEX',
            lastPrice: 15095.84, changePercentage: 0.29, changeValue: 43.42 },
        { id: 4, ticker: 'RUI', description: 'RUSSELL 1000 INDEX',
            lastPrice: 2495.9199, changePercentage: 1.68, changeValue: 41.3110 },
        { id: 5, ticker: 'NYA', description: 'NYSE COMPOSITE INDEX',
            lastPrice: 16744.29, changePercentage: 1.40, changeValue: 231.13 },
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component: give access to global state (store) and actions
export const GlobalProvider = ({ children }) => {
    // Use useReducer to get access to state and dispatch actions
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions that will make call to the reduder
    function deleteAsset(id) {
        dispatch({
            type: 'DELETE_ASSET',
            payload: id

        });
    }

    function addAsset(asset) {
        dispatch({
            type: 'ADD_ASSET',
            payload: asset

        });
    }

    return (
        <GlobalContext.Provider value={{
            assets: state.assets,
            deleteAsset,
            addAsset
        }}>
            {children}
        </GlobalContext.Provider>
    );

}
