console.log('working');


// array for each location on the board from 0 to 8
//   Indext will correspond with div ids for each sqare
var gameBoard = []

// array for win cases (corresponds with ids for squares - divs)
var winCases = [[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
               ]

// Set default (first turn) piece to 'X'
var piece = 'X';

// Insert function to capture click event, check valid square clicked and then use to call all other functions

container.addEventListener('click',clickHandler);


function clickHandler(event) {

  // Capture id of square clicked
  var id = eventTarget.id;

// If square (gameBoard array index) already has a piece then do nothing
  if (gameBoard[id] === 'X' || gameBoard[id] === 'O') {
    return false;
  }



// Alternate turns for players
  if piece === 'X' {
    piece = 'O'
    } else {
    piece = 'X'
  }

  //  Call the function that places the piece (per turn) onto board (into array)
  placePiece(id,turn);

  //  Call the function that updates display of DOM game board based on X or O
  updateDomBoard(gameBoard);

  //  Call the function that checks to see if a winner and announces who the winner is
  checkForWinner(gameBoard);

}



// Function to take clicked (square) id and place piece on the board
function placePiece(id,piece) {

  // Update gameBoard array (source of truth) - note: array index is same as id for squares)
  gameBoard[id] = piece;
  return true;
}


// Function to update display of DOM game board based on X or O
function updateDomBoard(gameBoard) {
   for (i = 0; i < gameBoard.length; i++)
      if (gameBoard[i] === 'X') {
        // set class of square to display X icon / img
      } if (gameBoard[i] === 'O') {
        // set class of square to display O icon / img
      } else {
        // set class of square[i] to diplay default background / img (tbd)
      }
    return true;
}

//  Function that checks to see if a winner and announces the result accordingly
  // function checkForWinner(gameBoard) {
  //   for (i = 0; i < gameBoard.length; i++)
    // test if X indices in gameBoard[i] match indexes of any of the winCases arrays

    // if true then display message congratulating the X player as the winner
    // and change the appearance of the squares that match the win case

    // else check if 'O' indices in gameBoard[i] match indexes of any of the winCases arrays

    // if true then display message congratulating the 'O' player as the winner

    // else return false

  // }



// Function to reset (refresh) triggered by button click (consider img call with empty href to force refresh?)
