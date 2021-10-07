// type conversion (typecasting) vs type coersion
// * Alteração de um tipo de dado para outro tipo
// Concatenação
console.log("9" + 5)
// Soma
console.log(Number('9') + 5)


// Manipulando strings e numeros 

// Transformar string em numero e numero em strings
let string = '123'
console.log(Number(string))

let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavre e quantos digitos tem um numero

let word = "Paralelepipedo"
console.log(word.length)

let numero = 123456
console.log(String(numero).length)
// Da erro, tem que coverter para string

// let numero = 123456
// console.log((numero).length)

// Transformando um número quebrado com 2 casas decimais e trocar ponto por vírgula.

let num = 123.09087
console.log(num.toFixed(3).replace(".",","))

// Replace substitui algo.

// Transfomando letras minusculas em maiusculas. E ao contrario
// Letras minusculas
let teste = "Olá mundo"
console.log(teste.toLowerCase())

// Letras maiusculas
console.log(teste.toUpperCase())