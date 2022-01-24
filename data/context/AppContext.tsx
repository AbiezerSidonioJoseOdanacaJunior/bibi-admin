import { createContext, useEffect, useState } from "react";

// type Tema = 'dark' | ''

interface AppContextProps {
    tema?: string
    alternarTema?: () => void  
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
    const [tema, setTema] = useState('dark')

    function alternarTema() {
        const nonoTema = tema === '' ? 'dark' : ''
        setTema(nonoTema)
        localStorage.setItem('tema', nonoTema)
    }

    useEffect(() => {
       const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo)
    }, [])

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}

        </AppContext.Provider>
    )
}

export default AppContext