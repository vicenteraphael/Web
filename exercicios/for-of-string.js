//qual será a saída?

let str1 = "AHEA"
let str2 = "RPAL"
let index = -1
let newStr = new String()
for (let ch of str2) newStr += ch+str1[++index]
console.log(newStr)


function funcao (num) {
    console.log(num)
}

let arr = [0]

arr.forEach((valor) => funcao(valor))