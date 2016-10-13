# tictactoe
GA WDI Project 1 - tic tac toe game

Concept:
Traditional tic tac toe game for two players to be played in a modern browser

Developer: Dean Birznieks  deanb100@gmail.com

Version: Under Development v1.0

Last Updated: 13 October 2016

Tic Tac Toe Game in Javascript - with some use of jquery

Overview:
   - Game board is drawn on the fly via jquery methods - creating 9 cells as divs with a unique id and data-index
   - Users click on the 9 cells of the board to position their X or O
   - User selections are captured via jquery click method and stored in a one dimensional array - 'board'
   - There are 8 possible combinations of three cells that are possible win cases - these are stored in 2 dimensional array 'winCases'
   - After each turn the program redraws the board and checks for an outcome - winner, tie or continue with next move
   - This involves the win cases (array) being compared to the board (array) for possible matches / outcomes
   - If there has been no win and all 9 cells have been selected by a user then the outcome is a Tie.
   - A button is provided to start a new game (refresh the browser page)

