// Tic Tac Toe Game in Javascript - with some use of jquery
//
// Approach:
//    - Game board is drawn on the fly via jquery methods - creating 9 cells as divs with a unique id and data-index
//    - Users click on the 9 cells of the board to position their X or O
//    - User selections are captured via jquery click method and stored in a one dimensional array - 'board'
//    - There are 8 possible combinations of three cells that are possible win cases - these are stored in 2 dimensional array 'winCases'
//    - After each turn the program redraws the board and checks for an outcome - winner, tie or continue with next move
//    - This involves the win cases (array) being compared to the board (array) for possible matches / outcomes
//    - If there has been no win and all 9 cells have been selected by a user then the outcome is a Tie.
//    - A button is provided to start a new game (refresh the browser page)

// Array for each location on the board from 0 to 8
// Used to store x and o for display on board
var board = ['','','','','','','','','']

// Array for win case positions (corresponds with ids for squares - divs)
var winCases = [[2,4,6],
                [0,4,8],
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8]
               ]

// Set default (first turn) piece to 'X'
var piece = 'x';

// Capture click event

$('.board').on('click',function(event) {

  console.log(event.target.getAttribute('data-index'));
  var indexClicked = event.target.getAttribute('data-index');
  board[indexClicked]=piece;


  // For debugging purposes - this logs the cell clicked including the data attribute and current value
  console.log(event.target);

  // Alternate turns for players - first player uses x
  if (piece === 'x') {
    piece = 'o'
    } else {
    piece = 'x'
  }

  // Clear the board ready for redraw
  $('.board').empty();

  // Redraw the board (after each move) appending 9 divs to a the board container
  for (var i = 0; i < board.length; i++) {
  $('.board').append( $('<div>').attr('data-index',i).text(board[i]))
  }

  //  Call the function that checks to determine if any winners, tie or next turn
  checkForWinner();

})


// Check for winner, tie or next turn and display outcome to user
function checkForWinner() {
  for (var i = 0; i < winCases.length; i++) {
    if (checkOneCase('x', i)) {
      var outcome = 'X Wins!';
      document.getElementById('messageDisplay').innerHTML = outcome;
      break;
    } else if (checkOneCase('o', i)) {
      outcome = 'O Wins!';
      document.getElementById('messageDisplay').innerHTML = outcome;
      break;
    } else if (board.indexOf('') === -1) {
      outcome = 'A TIE - Have another go!';
      document.getElementById('messageDisplay').innerHTML = outcome;
      break;
    } else {
      outcome = 'Next turn...';
      document.getElementById('messageDisplay').innerHTML = outcome;
    }
  }
}

// Function to check if there are matches in the board array with one of the 8 win cases
function checkOneCase(token, i) {
  var result = board[(winCases[i][0])] === token && board[(winCases[i][1])] === token && board[(winCases[i][2])] === token
  return result;
}

// Draw the board for the first time
for (var i = 0; i < board.length; i++) {
  $('.board').append( $('<div>').attr('data-index',i).text(board[i]))
}


// Function to reset (refresh) triggered by button click (consider img call with empty href to force refresh?)

// Clear the board ready for redraw
// There is button with id = resetButton in the html to reset game - by refreshing browser page
