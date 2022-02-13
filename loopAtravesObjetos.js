let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
/* Usando for...in, itere pelo spaceship.crewobjeto no editor de código e console.log()uma lista de funções e nomes de equipe no seguinte formato: 
'[crew member's role]: [crew member's name]', por exemplo, 
'chief officer: Dan'.*/
for(let role in spaceship.crew){ 
  console.log(`${role}: ${spaceship.crew[role].name}`)
}
/* Usando for...in, itere através do spaceship.crew objeto no editor de código 
e console.log()uma lista de nomes de equipe e graus no seguinte formato:
 '[crew member's name]: [crew member's degree]', ou seja, 'Lily: Computer Engineering'.*/
for (let role in spaceship.crew) {
  console.log(`${spaceship.crew[role].name}: ${spaceship.crew[role].degree}`)
}