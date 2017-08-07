var TicTacToe = function(n) {
  var gridSize = n || 3;
  this.board = Board(gridSize);
  this.players = PlayerList();
  this.currentPlayer = this.players[0];

  // Game core loop:
  while (!this.detectWin()) {
    this.turn(this.currentPlayer);
    this.currentPlayer = this.currentPlayer.next;
  }

  this.reportWinner(this.detectWin);
};

TicTacToe.prototype.turn = function(player) {
  // Tell player to specify which grid square to insert their token
  // Validate input - space must exist on grid & be empty
};

TicTacToe.prototype.detectWin = function() {
  // Check each row for a bingo;
  // Check each col for a bingo;
  // Check both diagonals for bingo;
  // If one is found, 
    // Return player token;
  // Else
    // Return false;
};

TicTacToe.prototype.reportWinner = function(winner) {
  // Tell everybody that winner is the winner
};

class players = [
  // TODO: instantiate a PlayerList() by asking for a new player name, or 'nobody' when finished...
  //   - Assign each player a token symbol: X, O, B, Z, W, H, etc.
];

class board = [  // TODO: instantiate new Board() with nXn grid...
  [null, null, null], 
  [null, null, null], 
  [null, null, null]
];

TicTacToe();
