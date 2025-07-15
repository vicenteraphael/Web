let str = "jandui"
let cript = new Array()
let chave = 12
for (let i in str) {
    if (i % 2 === 0) {
        cript.push(str[i])
    } else {
        cript.unshift(str[i])
    }
}
console.log(cript.join(''))