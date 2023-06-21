let x = "madhu akshaya priya ishwarya saranya"
let y = x.split(" ")
for(let i=0 ; i<y.length;i++){
    y[i]=(y[i].charAt(0).toUpperCase()+y[i].slice(1))
}
console.log(y.join(" "))