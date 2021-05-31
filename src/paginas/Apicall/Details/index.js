import React from 'react'
import DetallesEs from './DetallesEs'



export default function Details({id, datapok, loading,language }) {
    
    const poliglota = {
        'spanish':<DetallesEs id={id} datapok={datapok} loading={loading} />
    }
    return (
        poliglota[language]
    )
}
