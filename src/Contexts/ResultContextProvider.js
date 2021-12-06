import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';


const ResultConextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                
            }
        });

        const data = await response.json();
        setResults(data);

        setIsLoading(false);
    }

    return (
        <ResultConext.Provider value={{results, isLoading, searchTerm, setSearchTerm, getResults}}>
            {children}
        </ResultConext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);