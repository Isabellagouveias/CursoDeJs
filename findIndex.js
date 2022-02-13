const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
//Aqui, o const animals define esse array com o nome dos animais. 


const foundAnimal = animals.findIndex(el => { 
/*No foundAnimal ele faz essa função que lê-se assim: 
procure no array e em qual índice contém o animal 'elephant'*/
  return el === 'elephant'

})

console.log(foundAnimal);

