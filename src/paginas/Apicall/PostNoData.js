import React from 'react'

export default function PostNoData({datapok}) {
    let dataToPost={
        id: datapok[0].id,
        name: datapok[0].name,
        base_attack: 0,
        base_defense: 0,
        base_stamina: 0,
        forms: [],
        nodata:true
    } // para hacer post
    /*
    dataToPost={
        id:datapok[0].id,
        name:datapok[0].name,
        base_attack:datapok[0].base_attack,
        base_defense:datapok[0].base_defense,
        base_stamina:datapok[0].base_stamina,
        forms:[],
        nodata:false
    }
    */
    
    const handlePost = () => {
        console.log(dataToPost, '--intro');
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(dataToPost);
        console.log(raw);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }; 

        fetch("http://localhost:3002/api/combos", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error)); 
    }

    return (
        <div>
            <h3>El Pokemon {datapok[0].name} no tiene datos conocidos </h3>
            <button onClick={handlePost}>Intro</button>
        </div>
    )
}
