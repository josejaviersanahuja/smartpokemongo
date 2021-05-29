import React from 'react'
import PageEs from './PageEs'
import PageEn from './PageEn'
import PageD from './PageD'
import useSEO from '../../hooks/useSEO'
const poliglota = {
    'english':<PageEn/>,
    'spanish':<PageEs/>,
    'german':<PageD/>
}

export default function Page({language}) {
    const title=`List of all Pokemons || by ZitrojjDev`
    useSEO({title})
    
    return (
        poliglota[language]
    )
}
