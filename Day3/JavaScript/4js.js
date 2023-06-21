let user = Object.freeze({
    name:'Akilan',
    age: 19,
    phno:'6369932803',
    college:"SECE"
});
user.school = "KMHSS";
delete user.age;
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
