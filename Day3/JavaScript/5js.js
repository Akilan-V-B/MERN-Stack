//mutation

let user = {
    name:'Akilan',
    age: 19,
    phno:'6369932803',
    college:"SECE"
};

let x = user;
let y = {...user};
x.age=20;
console.log(x,y,user);