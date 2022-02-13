for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i=', i)

// Vai aparecer de 1 a 9 e depois vai aparecer o i = 10 (porque a variável VAR não tem escopo de BLOCO)

var funcs = []
 for(var i = 0; i < 10; i++) {
     funcs.push(function(){
        console.log(i)
     })
 }

 funcs[2]()
 funcs[8]() 