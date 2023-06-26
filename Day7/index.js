const pInfo = require('./personalInfo.json')

// console.log(pInfo.name)
// console.log(pInfo.Address.City)
// console.log(pInfo.Parents_Info)

const printJson = (info)=>{
    let keys = Object.keys(info)
    for(i of keys){
        if(typeof info[i] === 'object') {
            printJson(info[i])
        }
        else{
            console.log(info[i])
        }
    }
}
printJson(pInfo)

// let key = Object.keys(pInfo)
// for(i of key){
//     if(typeof pInfo[i] == 'object'){
//         let k = Object.keys(pInfo[i])
//         for(j of k) console.log(pInfo[i][j])
//     }
//     else console.log(pInfo[i])
// }
// console.log(pInfo["Address"]["City"])
