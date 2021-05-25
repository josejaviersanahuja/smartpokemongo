export default async function getFastAttacks({ fastTrue}) {


    const apiURLFast = `https://dry-spire-72214.herokuapp.com/api/pvp/fast_moves/${fastTrue}`
    return fetch(apiURLFast)
        .then(res => res.json()
            .then(respon => {
                let fast=respon
                return fast
            })).catch(error => {
                console.log(error);
                
            })
    }

   