const add = (a,b) => a+b
const sub = (a,b) => a-b
const mul = (a,b) => a*b
const div = (a,b) => a/b

let num1 = parseInt(process.argv[2])
let num2 = parseInt(process.argv[4])
let sym = process.argv[3]

switch(sym){
    case "+":
        console.log(add(num1,num2));
        break
    case "-":
        console.log(sub(num1,num2));
        break
    case "*":
        console.log(mul(num1,num2));
        break
    case "/":
        console.log(div(num1,num2));
        break
}
module.exports = {add,sub,mul,div};