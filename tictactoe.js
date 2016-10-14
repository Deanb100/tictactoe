// Tic Tac Toe Game in Javascript - with some use of jquery
//
// See readme.md file via my github page for description
//
// Array for each location on the board from 0 to 8
// Used to store x and o for display on board
var board = ['','','','','','','','','']

// Array for win case positions (corresponds with ids for squares - divs)
var winCases = [[2,5,8],
                [0,4,8],
                [2,4,6],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [0,1,2]
               ]

// Set default (first turn) piece to 'X'
var piece = 'x';

// Reset value of win counts to zero prior to browser refresh
var xWinCount = 0;
var oWinCount = 0;

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


// Function to check for winner, tie or next turn and update display message and formatting based on outcome / win
function checkForWinner() {
  for (var i = 0; i < winCases.length; i++) {
    if (checkOneCase('x', i)) {
      var outcome = 'Well Done - X Wins!';
      $('#messageDisplay').html(outcome);
      $( "#hOneTag" ).addClass( "xWinStyleH1" );
      // document.getElementById('hOneTag').style.color = "#239B56";
      $( "#messageDisplay" ).addClass( "xWinStyleMessages" );
      // document.getElementById('messageDisplay').style.color = "#239B56";
      $( "body" ).addClass( "xWinStyleBody" );
      // document.body.style.backgroundColor = "#82E0AA";
      xWinCount++;  // to track and display wins
      $('#scoreboardX').html('Player 1 (x) Wins = '+ xWinCount);
      // console.log('Games Won by X = ' + xWinCount);  // for debugging
      break;

    } else if (checkOneCase('o', i)) {
      outcome = 'Well Done - O Wins!';
      $('#messageDisplay').html(outcome);
      $( "#hOneTag" ).addClass( "oWinStyleH1" );
      // document.getElementById('hOneTag').style.color = "#D68910";
      $( "#messageDisplay" ).addClass( "oWinStyleMessages" );
      // document.getElementById('messageDisplay').style.color = "#D68910";
      $( "body" ).addClass( "oWinStyleBody" );
      // document.body.style.backgroundColor = "#FAD7A0";
      oWinCount++;  // to track and display wins
      $('#scoreboardO').html('Player 2 (o) Wins = '+ oWinCount);
      break;

    } else if (countInArray(board,'x') + countInArray(board,'o') < board.length) {
      outcome = 'Next turn...';
      document.getElementById('messageDisplay').innerHTML = outcome;

    } else { outcome = 'A TIE - Have another go!';
      document.getElementById('messageDisplay').innerHTML = outcome;
    }
  }
}

// Function to check if there are matches in the board array with one of the 8 win cases
function checkOneCase(token, i) {
  var result = board[(winCases[i][0])] === token && board[(winCases[i][1])] === token && board[(winCases[i][2])] === token
  return result;
}

// Function to count the number of turns / clicks on cell tokens by counting number of x & o tokens in the board array
function countInArray(array,token) {
    var count = 0;
    for (var i = 0; i < board.length; i++) {
        if (board[i] === token) {
            count++;
        }
    }
    return count;
}

// document.getElementById("resetButton").onclick = function() { emptyBoardArray(); };

var newGameBtn = document.getElementById('resetButton');
newGameBtn.addEventListener('click',emptyBoardArray);
//
//
//
//
// // Clear the board ready for redraw
// // There is button with id = resetButton in the html to reset game - by refreshing browser page
//
function emptyBoardArray() {
  board = ['','','','','','','','',''];
  piece = 'x';
  // Reset styles used for wins back to standard styles for player 'x'  (uses jquery)
  $( "#hOneTag" ).removeClass( "xWinStyleH1" );
  $( "#messageDisplay" ).removeClass( "xWinStyleMessages" );
  $( "body" ).removeClass( "xWinStyleBody" );

  // Reset styles used for wins back to standard styles for player 'o'  (uses jquery)
  $( "#hOneTag" ).removeClass( "oWinStyleH1" );
  $( "#messageDisplay" ).removeClass( "oWinStyleMessages" );
  $( "body" ).removeClass( "oWinStyleBody" );

  $('.board').empty();
  for (var i = 0; i < board.length; i++) {
    $('.board').append( $('<div>').attr('data-index',i).text(board[i]))
  }
}
//



// Draw the board for the first time (uses jquery)
for (var i = 0; i < board.length; i++) {
  $('.board').append( $('<div>').attr('data-index',i).text(board[i]))
}
