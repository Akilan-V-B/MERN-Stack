let arr = [1,2,3,"abc",3.32]
arr.push(20);
console.log(arr)
arr.pop();
console.log(arr)
arr.push((x,y)=>x*y)
arr.unshift(10);
arr.shift();
console.log(arr[5](10,20))
arr.unshift({a:1,b:2})
console.log(arr)
console.log(arr[0].a)
arr.unshift(['!','$','~'])
console.log(arr[0][1])
arr.push(9,8,7)
console.log(arr)


