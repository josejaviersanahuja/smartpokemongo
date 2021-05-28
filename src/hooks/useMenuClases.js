import {useState} from 'react'

export default function useMenuClases({setlanguage}) {
    
    const [menuOpen, setmenuOpen] = useState(false)
    
    const claseMenu= menuOpen? "menu open": "menu"
    const claseBoton= menuOpen? "boton open": "boton"

    const handleChange = (e) => {
        setlanguage(e.target.value);
    }

    const handleClick = () => {
       setmenuOpen(!menuOpen)
    }
    
    return {handleClick, handleChange, claseBoton, claseMenu, menuOpen}
    
}
