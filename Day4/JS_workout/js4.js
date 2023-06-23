let emp = [
    {
        name:"Akil",
        age:19,
        salary:50000
    },
    {
        name:"Fayaz",
        age:25,
        salary:30000
    },
    {
        name:"Ani",
        age:23,
        salary:15000
    },
    {
        name:"Jeeva",
        age:26,
        salary:12000
    },
    {
        name:"Chandra",
        age:45,
        salary:5000
    },
    {
        name:"Faree",
        age:20,
        salary:35000
    }
]

let ans = emp.filter(e => e.salary>=25000).map(ee => ({name:ee.name,age:ee.age}))

console.log(ans)