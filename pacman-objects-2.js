const ghosts = inky: 'Cyan', blinky: 'Red' pinky: 'Pink', clyde: 'Orange'};
console.log(ghosts)

console.log(ghosts.inky); 
console.log(ghosts.blinky);

//or 

console.log(ghosts['inky']);
console.log(ghosts['blinky']);

const ghostname = 'clyde'
ghosts[ghostname];