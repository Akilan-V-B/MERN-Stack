const isPalindrome = (str) => {
    return (str==(str.split('').reverse().join('')))
}
console.log(isPalindrome("level"))

let arr = ["Akil",1,3.5,"fataz"]
let d = {
    name : "Ani",
    age : 19,
    phno : 123456789
}

for(i in arr) console.log(i)
for(i in d) console.log(i)
for(i of arr) console.log(i)
for(i in d) console.log(d[i])

let x = [1,2,3,4,5]

x.forEach((ele)=> console.log((ele*ele)+" "))