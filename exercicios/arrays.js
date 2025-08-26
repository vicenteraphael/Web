//qual a saída?

let arr = ["A", "B", "D"]

arr.splice(2, 1, "A", "C")
arr.push("A", "T")
arr[arr.length] = "E"

console.log(arr)