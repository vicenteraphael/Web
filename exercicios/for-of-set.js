//qual será a saída?

const addStrToSet = function(str, set) {for (let ch of str) set.add(ch)}
let set = new Set()
let str = "PPPAPPPUUPULLPPPOLO"
addStrToSet(str, set)
let newStr = new String()
for (let el of set) newStr += el
console.log(newStr)