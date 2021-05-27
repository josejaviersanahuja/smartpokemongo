import React from 'react'
import ListaD from './MenuD/ListaD'
import ListaEs from './MenuEs/ListaEs'
import ListaEn from './MenuEn/ListaEn'
import useMenuClases from '../hooks/useMenuClases'



export default function Menu({ language, setlanguage }) {

    const {handleClick, handleChange, claseBoton, claseMenu} = useMenuClases({setlanguage})
    
    const poliglota = {
        'english': <ListaEn handleClick={handleClick} />,
        'spanish': <ListaEs handleClick={handleClick}/>,
        'german': <ListaD handleClick={handleClick}/>
    }

    return (<>
        <div className={claseBoton} onClick={handleClick}>
                <div className="arrow first"></div>
                <div className="arrow second"></div>
                <div className="arrow third"></div>
        </div>
        <div className={claseMenu}>
            <ul>
                {poliglota[language]}
            </ul>
            
        </div>
        <select className="language" onChange={handleChange} defaultValue="spanish">
            <option disabled>Select Language</option>
            <option value="spanish">español</option>
            <option value="english" >english</option>
            <option value="german">deutsch</option>
        </select>
    </>)
}
