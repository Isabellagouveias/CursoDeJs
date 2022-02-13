{
    {
        {
            {
                var sera = 'Sera???'
            }
        }
    }
}

console.log(sera) // bloco em si não faz diferença nesse contexto

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)

// Fuja do escopo Global - Variaveis globais são ruins porque como é no mesmo escopo, uma sobescreve a outra e pode gerar muitos bugs.

var numero = 1 
{
    var numero = 2
    console.log('dentro=', numero)
}
console.log('fora=', numero) // Aparece o número 2, porque está dentro do mesmo escopo, não está em uma função