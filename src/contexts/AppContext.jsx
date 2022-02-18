import React, { createContext, useState } from 'react'


export const AppContext = createContext()
export const AppContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [token, setToken] = useState('');
    const [sn, setSn] = useState(0);

    const handleSn = (newSn) => {
        setSn(newSn)
    }
    const handleData = (newData) => {
        setData(newData)
    }
    const handleToken = (t) => {
        setToken(t)
    }

    return (
        <AppContext.Provider value={{ sn, handleSn, token, data, handleData, handleToken }}>
            {children}
        </AppContext.Provider>
    )
}
