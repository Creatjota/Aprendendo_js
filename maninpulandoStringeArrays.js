// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let frase = "Eu quero viver o amor"
let novafrase = frase.split(" ")
console.log(novafrase)
let final = novafrase.join("_")
console.log(final)


// Verificando se tem uma palavra na frase
let verificacao = "Eu quero viver o amor"
console.log(verificacao.includes("Amor"))
console.log(verificacao.includes("amor"))
console.log(verificacao.includes("Joao"))

// Criando array com construtor

let meuarray = new Array('a', 'b', 'c', 'j')
console.log(meuarray)
let meu = new Array(10)
console.log(meu)

//Contando elementos de um Array

console.log(["a", 'b', 'c'].length)


//   Transformando uma cadeia de caracteres em elementos de um array
console.log(Array.from("Mundo"))



// Manipulando Array
let brincando = ["html", "css", "js"]

// Adicionar um item no fim
// brincando.push("nodejs")
// Adicionar no começo
// brincando.unshift("sql")
// Remover do fim 
// brincando.pop()
// Remover do começo
// brincando.shift() 
// Pegar somente alguns elementos do array 
// console.log(brincando.slice(1,1))
// Remover 1 ou mais items em qualquer posição do array 
// console.log(brincando.splice(1,2))
// Encontrar a posição de um elemento no array 
let posicao = brincando.indexOf('js')
console.log(posicao)


