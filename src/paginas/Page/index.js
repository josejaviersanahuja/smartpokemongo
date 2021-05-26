import React from 'react'
import PageEs from './PageEs'
import PageEn from './PageEn'
import PageD from './PageD'

const poliglota = {
    'english':<PageEn/>,
    'spanish':<PageEs/>,
    'german':<PageD/>
}

export default function index({language}) {
    
    return (
        poliglota[language]
    )
}
