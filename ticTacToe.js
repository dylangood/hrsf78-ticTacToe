var TicTacToe = function(n) {
  var gridSize = n || 3;
  this.board = Board(gridSize);

  // Game core loop:
  while (!this.detectWin()) {
    this.turn(this.currentPlayer);
  }

};

TicTacToe.prototype.detectWin = function() {
  // Check each row for a bingo;
  // Check each col for a bingo;
  // Check both diagonals for bingo;
  // If one is found, 
    // Return true;
  // Else
    // Return false;
};

var board = [  // TODO: instantiate new Board() with nXn grid...
  [null, null, null], 
  [null, null, null], 
  [null, null, null]
];

TicTacToe();
