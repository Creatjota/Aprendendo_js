// Control flow
// if....else

let temperature = 36

// if(temperature>=37.5) {
// console.log("Febre Alta")}
// } else {
// console.log("Saudavel")
// }

// else if(temperature <37.5 && temperature >= 37) {
// console.log('Febre moderada')
// } else {
// console.log('Saudavel')
// }
// OU

let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log('Febre alta')
} else if (mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log("Saudável")
}


// switch

let expression = ""
switch (expression) {
    case 'a':
        // código
        console.log('a')
        break
    case 'b':
        //cogio para expressao b
        console.log('b')
        break
    default:
        console.log('default')
        break
}




// throw
 


//try...catch