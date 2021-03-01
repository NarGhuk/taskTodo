import React, {useContext, createContext, useState} from 'react';

export const AppContext = createContext({});

export const useContextData = () => {
    return useContext(AppContext)
};

export const AppProvider = ({children}) => {
    const [searchName, setSearchName] = useState('');
    const setSearchedCardsName = (e) => setSearchName(e.target.value);

    return (
        <AppContext.Provider value={{
            setSearchedCardsName,
            searchName
        }}>{children}
        </AppContext.Provider>
    )
};

