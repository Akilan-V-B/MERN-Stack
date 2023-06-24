const fs = require('fs')

function read(filepath){
    return new Promise((resolve,reject) => {
        fs.readFile(filepath,(err,data) => {
            if(err) reject("Failed during read")
            else resolve(data)
        })
    })
} 

function write(filepath,update){
    return new Promise((resolve,reject) => {
        fs.writeFile(filepath, update, (err) => {
            if (err) reject("error");
            else resolve('The file has been saved!');
          });
    })
} 

//Only write when read is done.
// read('text.txt')
// .then((data)=>{
//     console.log(data.toString())
//     write('text.txt',"Akil!!")
// .then((data)=>{
//     console.log(data.toString())
// })
// .catch((err)=>console.log(err))

// })
// .catch((err)=>console.log(err))

module.exports = {read,write}