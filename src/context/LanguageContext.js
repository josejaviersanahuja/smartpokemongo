import React, {useState} from 'react'
const Context = React.createContext({ })
export function LanguageContextProvider({children}) {
    const [language, setlanguage] = useState("spanish")

    return <Context.Provider value={{language, setlanguage}}>
    {children}
    </Context.Provider>
}
export default Context