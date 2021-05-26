import React from 'react'
import AboutEs from './AboutEs'
import AboutEn from './AboutEn'
import AboutD from './AboutD'

const poliglota = {
    'english':<AboutEn/>,
    'spanish':<AboutEs/>,
    'german':<AboutD/>
}

export default function index({language}) {
    
    return (
        poliglota[language]
    )
}
