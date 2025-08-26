let arr = new Array(100)
for (let i = 1; i < 100; ++i) arr.push(i)
let newArr = arr.filter(value => value % 7 === 0)
console.log(newArr)