function sum(x,y){
    if(typeof x !== "number" || typeof y !== "number")  return "Invalid Input";
    return x+y;
}
let a = (function sumiif(x,y){
    if(typeof x !== "number" || typeof y !== "string")  return "Invalid Input";
    return x+y;
})(10,20)
const sum1 = (x,y) => x+y+1;
console.log(sum1(10,20));
console.log(sum("10",20));
console.log(a);
