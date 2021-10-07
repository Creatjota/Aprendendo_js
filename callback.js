// calback function 
//retorno da função
 function meunome(nome) {
     console.log('antes de executara função')
     nome()
     console.log('depois de executar a função')
 
}

meunome(
    () => {
        console.log('estou em uma callback')
    }
)