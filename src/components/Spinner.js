import React from 'react'

export default function Spinner() {
    return (
        <div className="spinner">
            <div className="spinner__text" >LOADING</div>
            <div className="spinner__middle"></div>
            <div className="spinner__item red"></div>
            <div className="spinner__item white"></div>
        </div>
    )
}
