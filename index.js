const { clients, networks } = require("./client/nodeClient");
const { isSe } = require('./client/se');


async function accInfo(addr) {  
    const query = `query {
        accounts(filter:{
        id: {
            eq:"${addr}"
        }
        }){
        id
        balance(format:DEC)    
        acc_type_name
        acc_type
        }
    }`;
    let requests = [clients[0].net.query({ query }), clients[1].net.query({ query })];    
    if(await isSe()){
        requests.push(clients[2].net.query({ query }));
    }
    return (await Promise.allSettled(
        requests
    )).map((r,index) => {      
        return {
            network: networks[index],
            data:r.value.result.data.accounts
        }
    })
}
module.exports = {
    accInfo
}

//accInfo("-1:7777777777777777777777777777777777777777777777777777777777777777").then(r => console.log(r))