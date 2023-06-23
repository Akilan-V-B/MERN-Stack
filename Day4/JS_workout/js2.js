let n = [
    {
        name:"mahesh",
        dob:2002
    },
    {
        name:"akil",
        dob:2003
    },
    {
        name:"bala",
        dob:2004
    },
    {
        name:"surya",
        dob:2005
    }
]
let ans = n.filter(ele => (ele.dob>2002)).map(ele=>ele.name)
console.log(ans)