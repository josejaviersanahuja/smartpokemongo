export default function getAPI({id}) {
  
  
    const apiURL=`http://localhost:3002/api/pokemon/${id}`
    
      return fetch(apiURL)
                .then(res=> res.json()
                  .then(respon=> {
                    if (res.status===200) {
                      let pok=respon
                      return pok
                    }
                  })).catch(error => {
                    let pok=[]
                    console.log(error);
                    return pok
                  })
      
  }