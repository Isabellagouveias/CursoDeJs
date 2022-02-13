let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
// Write your code below
spaceship.color = 'glorious gold'; /*1 Reatribuir a color propriedade do spaceship objeto
para ter um valor de'glorious gold' */
  
spaceship.numEngines = 10; /* 2 
Sem alterar as linhas 1 - 6, adicione uma numEngines propriedade
com um valor numérico entre 1 e 10 ao spaceship objeto.*/
  
delete spaceship['Secret Mission']; /*3 Use o delete operador para remover a
'Secret Mission'propriedade do spaceship objeto. 
--Tem um espaço por isso é entre colchetes. */