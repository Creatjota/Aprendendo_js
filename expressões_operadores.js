// Expressões e Operadores

// -Expressoes
// -Operadores 
// Binario  
// Unary 
// Ternary




let one = 1
let two = 2
// estritamente igual a
console.log(one === "1")
console.log(one === 1)

// !== estritamente diferente de
console.log(two !== "2")
console.log(two !== 2)


// operadores de atribuição (Assignment)
let x

// assignment
x = 1
// addition assignment
// x = x + 2
x += 2

// subtraction assignment
// x = x - 1
x -= 1

// multiplication assignment
// x = x * 2
x *= 2

// division assignment
// x = x / 2
x /= 2

//remainder, exponetiation
 x %= 2
//x **= 2
console.log(x)


// Operadores lógicos 
// 2 valores booleanos, quando verificados, resultada em verdadeiro ou falso
// let pao = true
// let queijo= false

// AND &&
// console.log(pao && queijo)
// // or ||
// console.log(pao||queijo)
// // not !
// console.log(!pao)


// Operador condicional (Ternário)
//Dependendo da condição, nos receberemos valores diferentes
// Condição entao valor 1 se nao valor 2
// condition ? value1 : value2


//exemplos
// café da manha top
let pao = true
let queijo = false
const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)


// maior de 18
let age = 20 
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)


// Operador de String ( String operator )
// comparison (comparação)
console.log('a' == 'a')

//concatenation (Cantatenação)
let alpha = 'alpha'
console.log (alpha += "bet" + 's')



// Type conversion (typecasting) vs Type coersion

console.log('9' + 5)

// FALSY
// Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

/*
false
0
-0
""
null
undefined
NaN
*/
 //console.log( NaN ? 'sim' : 'nao')

/* 
TRUTHY
Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops )

true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/
console.log (Infinity ? 'sim' : 'nao')

// Operator precedence
 // Precedencia de operadores

 /* 
 *grouping                            ()
 *negação e incremento                ! ++ --
 *multiplicação e divisão             * /
 *adição e subtração                  +   -
 *relacional                          < <= > >=
 *igualdade                           ==  !=  === !==
 *and                                 &&
 *or                                  ||
 *condicional                         ?:
 assignment (atribuição)              = += -= *=
 */
