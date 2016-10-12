console.log('working');


// array for each location on the board from 0 to 8
//   Indext will correspond with div ids for each sqare
var board = ['o','x','o','x','o','x','o','o','']

// array for win cases (corresponds with ids for squares - divs)
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

// Insert function to capture click event, check valid square clicked and then use to call all other functions

// container.addEventListener('click',clickHandler);

$('.board').on('click',function(event) {

// function clickHandler(event)

  // Capture id of square clicked  (*** fix up syntax here ***)
  console.log(event.target);

  // If square (board array index) already has a piece then do nothing
  // if (board[id] === 'x' || board[id] === 'o') {
  //   return false;
  // }

  // Alternate turns for players - first player uses crosses
  if (piece === 'x') {
    piece = 'o'
    } else {
    piece = 'x'
  }

  // Clear the board
  $('.board').empty();

  // Redraw the board
  for (var i = 0; i < board.length; i++) {
  $('.board').append( $('<div>').attr('data-index',i).text(board[i]))
  }

  //  Call the function that places the piece (per turn) onto board (into array)
  // placePiece(id,turn);

  //  Call the function that updates display of DOM game board based on X or O
  // updateDomBoard(board);

  //  Call the function that checks to see if a winner and announces who the winner is
  // checkForWinner(board);

})

var winner = ''

// Check for winner, tie or false unfinished
// function checkForWinner(board) {
for (var i = 0; i < winCases.length; i++) {
  if (board[(winCases[i][0])] === 'x' &&
      board[(winCases[i][1])] === 'x' &&
      board[(winCases[i][2])] === 'x') {
         var winnner = 'x';
         console.log('Winner is X');
     } if (board[(winCases[i][0])] === 'o' &&
          board[(winCases[i][1])] === 'o' &&
          board[(winCases[i][2])] === 'o') {
            var winner = 'o';
            console.log('Winner is O');
          } else {
            console.log('')
      }
  }

// Determine if a Tie  *** NEEDS MORE WORK  ***
// if (board.indexOf('') === -1) && winner !== "") {
//         console.log('TIE !!');
//   }




// Draw board for the first time
for (var i = 0; i < board.length; i++) {
  $('.board').append( $('<div>').attr('data-index',i).text(board[i]))
}


// } if (board.indexOf('') === -1) {
//       console.log('TIE !!');
//   } else {
//     console.log("Now Result Yet");
//   }
// }
//

// Function to take clicked (square) id and place piece on the board
// function placePiece(id,piece) {

  // Update Board array (source of truth) - note: array index is same as id for squares)
// board[id] = piece;
//   return true;
// }


// Function to update display of DOM game board based on X or O
// function updateDomBoard(gameBoard) {
//    for (i = 0; i < gameBoard.length; i++)
//       if (gameBoard[i] === 'x') {
//         // set class of square to display X icon / img
//       } if (gameBoard[i] === 'o') {
//         // set class of square to display O icon / img
//       } else {
//         // set class of square[i] to diplay default background / img (tbd)
//       }
//     return true;
// }

//  Function that checks to see if a winner and announces the result accordingly
  // function checkForWinner(gameBoard) {


    // if true then display message congratulating the X player as the winner
    // and change the appearance of the squares that match the win case

    // else check if 'O' indices in gameBoard[i] match indexes of any of the winCases arrays

    // if true then display message congratulating the 'O' player as the winner

    // else return false

  // }



// Function to reset (refresh) triggered by button click (consider img call with empty href to force refresh?)




// ************************


// Need to cater for TIE outcome when all cells have either an 'x' or an 'o'

// Check if a tie
