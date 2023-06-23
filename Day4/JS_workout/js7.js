 const promisex = new  Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('resolve')
    },4000)
 })

 promisex
 .then((value)=>console.log(value))
 .catch(()=>console.log('error'))

 const apiCall= async()=>{
    const promise_from_api = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await promise_from_api.json()
    console.log(data)
}
apiCall()