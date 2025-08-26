/*

*/

// qual será a saída?

let arr = new Array()
arr[0] = 1
for (let el of arr) {
    if (el === 16) break
    arr.push(el*2)
}
console.log(arr)