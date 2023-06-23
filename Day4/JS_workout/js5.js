//unpacking - de-structuring

let arr = [10,20,30,40,50,60,70]
let [a,b,c,d,...e] = arr;
let [x,y, ,z] = arr;
console.log(a,b,c,d,e)
console.log(x,y,z)

let arr1 = [10,20,30,40,50,60,70,80,90,100]
let [f,g,,h,i,...j] = arr1
console.log(f,g,h,i,j)

//object un packing

let o ={
    name:"Jeeva",
    age:19,
    city:"Gotham",
    aka:"Batman"
}

let {name,age,...rest} = o;

console.log(name,age,rest)