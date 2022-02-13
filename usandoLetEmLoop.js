for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i=',i)

// Vai imprimir ate o 9 e vai falar que o I não está definido (porque a variavel com LET tem escopo de BLOCO)

const funcs = []
 for(let i = 0; i < 10; i++) {
     funcs.push(function(){
        console.log(i)
     })
 }

 funcs[2]()
 funcs[8]() 