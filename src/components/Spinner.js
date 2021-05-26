import React from 'react'

export default function Spinner() {
    return (
        <div className="spinner">
            <div className="spinner__text">Loading</div>
            <div className="spinner__red"></div>
            <div className="spinner_middle"></div>
            <div className="spinner__white"></div>
        </div>
    )
}
