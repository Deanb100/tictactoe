# tictactoe
## GA WDI Project 1 - Tic Tac Toe Game

### Developer
Dean Birznieks  deanb100@gmail.com


### Concept
Traditional tic tac toe game for two players to be played in a modern browser


### Version
Under Development v2.0

### Last Updated
14 October 2016

### Last Change
Enhanced styling for wins, replaced new game / reset functionality to enable new game without browser refresh and also added win tracking and scoreboard.

### Technology
Javascript with selective use of jquery

### [Link to play game](https://deanb100.github.io/tictactoe/)

## Functionality Overview
   - Game board is drawn on the fly via jquery methods - creating 9 cells as divs with a unique id and data-index
   - Users click on the 9 cells of the board to position their X or O
   - User selections are captured via jquery click method and stored in a one dimensional array - 'board'
   - There are 8 possible combinations of three cells that are possible win cases - these are stored in 2 dimensional array 'winCases'
   - After each turn the program redraws the board and checks for an outcome - winner, tie or continue with next move
   - This involves the win cases (array) being compared to the board (array) for possible matches / outcomes
   - If there has been no win and all 9 cells have been selected by a user then the outcome is a Tie.
   - Styling class changes are used to celebrate a win
   - A button is provided to start a new game (without refreshing browser)
   - Scoreboard is provided to keep score
