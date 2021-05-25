export default async function getChargedAttacks({ chargedTrue }) {


    const apiURLCharged = `https://dry-spire-72214.herokuapp.com/api/pvp/charged_attacks/${chargedTrue}`
    return fetch(apiURLCharged)
        .then(res => res.json()
            .then(respon => {
                let charged = respon
                return charged;
            })).catch(error => {
                console.log(error);
            })
}