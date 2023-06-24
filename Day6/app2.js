//import {add} from "./app1.js"
const { log } = require('console');
const {add,sub,mul,div} =require('./app1.js')


//console.log(sub(10,3));
const fs = require('fs')
console.log(__dirname+"text.txt");
fs.readFile(`${__dirname}/text.txt`, (err, data) => {
  if (err) console.log("error");
  else console.log(data.toString());
});

const value = "Akilan "
const update = " 😁😘"
fs.writeFile('text.txt', update, (err) => {
  if (err) console.log("error");
  else console.log('The file has been saved!');
});