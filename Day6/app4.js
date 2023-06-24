const {read,write} = require('./app3.js')
const fileOperation = async() =>{
    try{
        const state = await read('text.txt')
        console.log(state.toString());
        const result = await write('text.txt','asdf')
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
fileOperation()