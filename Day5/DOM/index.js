// document.body.innerHTML="<div><h1>Akilan V B</h1></div>"
// document.body.innerHTML="<div><h1>Anirudh</h1></div>"
// document.body.innerHTML="<div><h1>Fataz Ahamed</h1></div>"
document.body.style.backgroundColor='black'
const child = document.body.children
console.log(child);
setTimeout(()=>{
    child[0].style.color="Crimson"
    child[0].textContent="Crimson"
},1000)
setTimeout(()=>{
    child[1].style.color="Yellow"
    child[1].textContent="Yellow"
},2000)
setTimeout(()=>{
    child[2].style.color="Green"
    child[2].textContent="Green"
},3000)

let val = true
setInterval(()=>{
    child[0].style.color = ((val) ? "Crimson" : "Green")
    child[1].style.color = ((val) ? "Green" : "Blue")
    child[2].style.color = ((val) ? "Blue" : "Crimson")
    val = !val
},1)

const button = document.getElementById('login-button')
const username = document.getElementById('user')
const password = document.getElementById('us_pass')
const form = document.getElementById('submit')
button.addEventListener('click',(event)=>{
    console.log("Clicked")
})

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log("Submitted")
    console.log(username.value,password.value)
})


