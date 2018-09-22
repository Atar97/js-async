const readline = require('readline');

const adder = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.towers = [[1, 2, 3], [], []];
  }
  
  prompt_move(){
    console.log(this.towers);
    adder.question('Choose a From Tower\n', (fromTower) => {
      adder.question('Choose a To Tower\n', (toTower) => {
          console.log([fromTower, toTower]);
          return [fromTower, toTower];
      });
    });
  }
  
  valid_move(fromIdx, toIdx) {
    const towers = this.towers;
    if(towers[fromIdx].length > 0) {
      if(towers[fromIdx][0] < towers[toIdx][0] || towers[toIdx].length === 0) {
        return true; 
      }
    }
    return false;
  }
  
  moves() {
    console.log(this);
    [fromTower, toTower] = this.prompt_move();
    if (valid_move(fromTower, toTower)) {
      this.towers[toTower].unshift(this.towers[fromTower].shift());
    } else {
      console.log('Not a Valid Move');
    }
  }

  run () {
    this.moves();
      
    // adder.close();
  }
}

const g = new Game();

g.moves();

// adder.close();
