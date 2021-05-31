import React from 'react'

export default function PostSmeargle({datapokByform}) {
    let dataToApi=datapokByform // para hacer post
    const handlePost = () => {
        console.log( dataToApi, '--listo para post PostSmeargle');
    }
    return (
        <>
            <p className="details__p">Smeargle no tiene ataques</p>
            <button onClick={handlePost}>Intro</button>
        </>
    )
}
