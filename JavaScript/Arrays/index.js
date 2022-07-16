let array = ["banana", "pera", "maca"]
let array2 = ["banan", 12, 11.5]
let array3 = new Array("banana", "batata", "beterraba")

array.push("abacaxi", "acerola")

console.log(array, array2, array3)

let removedElement = array.pop()

console.log(array, array2, array3)
console.log(removedElement)

removedElement = array.shift()
console.log(removedElement, array)

array.unshift("berinjela")
console.log(array)

console.log(array.length)

let elementIndex = array.indexOf("pera")
console.log(elementIndex)

let fruits = [["orange", 10], ["banana", 12], ["kiwi", 100]]
console.log(fruits[2][0])

removedElement = array.splice(1,2,"goiaba","uva","pessego")
console.log(removedElement)
console.log(array)

let extractedNames = array.slice(1,3)
console.log(extractedNames)
console.log(array)
