/* Passar por referência */
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
/*Escreva uma função greenEnergy()que tenha um objeto 
como parâmetro e defina a 'Fuel Type'
propriedade desse objeto como 'avocado oil'.*/
const greenEnergy = (obj) => {
    obj['Fuel Type'] = 'avocado oil'
}

/* Escreva uma função remotelyDisable()que tenha um objeto como
parâmetro e defina (ou reatribua) a disabledpropriedade
desse objeto para true. */ 
const remotelyDisable = (obj) => {
    obj.disabled = true
}

/* Chame suas duas funções com o spaceshipobjeto no editor de código 
e, em seguida, console.log()o spaceshipobjeto para confirmar
que essas propriedades foram alteradas/adicionadas. */
greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);
