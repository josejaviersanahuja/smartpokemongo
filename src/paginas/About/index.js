import React from 'react'
import AboutEs from './AboutEs'
import AboutEn from './AboutEn'
import AboutD from './AboutD'
import useSEO from '../../hooks/useSEO'

const poliglota = {
    'english':<AboutEn/>,
    'spanish':<AboutEs/>,
    'german':<AboutD/>
}

export default function About({language}) {
    const title=`An open source code || by ZitrojjDev`
    useSEO({title})
    
    return (
        poliglota[language]
    )
}
