//Estrutura de repetição
// for-para
//break-para a execução
// continue-pula a execução do momento


// for(let i = 2; i <=10; i++) {
//     console.log(i)
// }

// for(let i = 10; i >0; i--) {
//     if(i === 5){
//         continue
//     }
//     console.log(i)
// }



// While
//Enquanto

// let a = 0;

// while(a < 10) {
// console.log(a)
// a++
// }


// for...of
// let nome = 'João'
// let nomes= ['Arnon', 'paulo', 'Teixeira']
// for(let nome of nomes) {
//  console.log(nome)   
// }


//for...in

let person = {
    name: 'jhon',
    age: 30,
    weight: 88.6
}
for(let property in person){
    console.log(property)
    console.log(person[property])
}