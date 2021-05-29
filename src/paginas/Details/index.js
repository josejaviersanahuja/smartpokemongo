import React from 'react'
import DetallesEs from './DetallesEs'
import DetallesEn from './DetallesEn'
import DetallesD from './DetallesD'



export default function Details({id, datapok, loading,language }) {
    
    const poliglota = {
        'english':<DetallesEn id={id} datapok={datapok} loading={loading} />,
        'spanish':<DetallesEs id={id} datapok={datapok} loading={loading} />,
        'german':<DetallesD  id={id} datapok={datapok} loading={loading} />
    }
    return (
        poliglota[language]
    )
}
