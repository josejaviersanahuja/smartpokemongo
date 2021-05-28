import React, {useState} from 'react'
const Context = React.createContext({ })
export function LanguageContextProvider({children}) {
    const [language, setlanguage] = useState("spanish")
    const [menuOpen, setmenuOpen] = useState(false)
    
    const claseMenu= menuOpen? "menu open": "menu"
    const claseBoton= menuOpen? "boton open": "boton"

    const handleChange = (e) => {
        setlanguage(e.target.value);
    }

    const handleClick = () => {
       setmenuOpen(!menuOpen)
    }
    
    return <Context.Provider value={{language, setlanguage,handleClick, handleChange, claseBoton, claseMenu, menuOpen}}>
    {children}
    </Context.Provider>
}
export default Context