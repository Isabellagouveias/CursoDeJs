/*1. Vamos criar um novo objeto para praticar usando this.
Existe um objeto robot, adicione uma propriedade 
de modele atribua a ele um valor de '1E78V2'.
Adicione outra propriedade energyLevel e atribua a ela um valor de 100.*/

/*2. Dentro do robot objeto, adicione um método chamado provideInfo. 
Dentro do corpo de provideInfo(), retorne a seguinte string usando interpolação:
I am MODEL and my current energy level is ENERGYLEVEL.  
Substitua 'MODEL' e 'ENERGYLEVEL' pelo objeto de chamada modele 
energyLevelpropriedade. Lembre-se, para obter acesso às propriedades do objeto 
chamador dentro de um método, você deve usar a palavra- thischave!*/


/*3. Agora para verificar .provideInfo() 
tem acesso às propriedades internas do robot.
Registre o resultado da chamada do .provideInfo() método no robot console.*/

const robot = {
    model : '1E78V2',
    energyLevel : 100,
    provideInfo() {
    return(`I am ${this.model} and my current energy level is ${this.energyLevel}`)
    }
  };
  
  console.log(robot.provideInfo());