import React from 'react'
import ListaD from './MenuD/ListaD'
import ListaEs from './MenuEs/ListaEs'
import ListaEn from './MenuEn/ListaEn'


const poliglota = {
    'english': <ListaEn />,
    'spanish': <ListaEs />,
    'german': <ListaD />
}

export default function Menu({ language, setlanguage }) {

const handleChange =(e)=>{
setlanguage(e.target.value);
}

    return (<>
        <div className="menu">
            <ul>
                {poliglota[language]}
            </ul>
        </div>
        <select className="language" onChange={handleChange}>
                <option value="spanish">español</option>
                <option value="english" >english</option>
                <option value="german">deutsch</option>
        </select>
    </>)
}
