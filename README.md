# Tic Tac Toe With Minimax Algorithm
![Screenshot of the Tic Tac Toe game.](/screenshot.png)
## Description
Minimax is a recursive algorithm that is used in decision making and game theory to find the optimal move for a player. The AI mode in this game is based on the Minimax Algorithm, making it unbeatable. Against this AI, the best achievable result for a human player is a draw. This Tic Tac Toe project is a part of [The Odin Project](https://www.theodinproject.com/dashboard)'s [curriculum](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe). The Odin Project provides a high quality web development education maintained by an open source community.
## Live Preview
The [Tic Tac Toe](https://haminimi.github.io/tic-tac-toe/) game.
## Main Features
- **Classic and Unbeatable AI Mode:** In the Classic mode, two players compete in a traditional game. While the AI mode allows a player to play against the computer. The AI mode is based on the Minimax algorithm which is a recursive algorithm for choosing the next move, usually in a two-player game.
- **Restart Button:** This button allows a player to restart the game at any point. In the Classic mode, if the game is over, after the restart a new round starts with the player who lost or a randomly selected player if it was a draw. If the game is in the AI mode and the game is over or draw, a new round always begins with a human player, which is the player 'X'.
- **Score Display and Clear Button:** The score display updates after each round, reflecting the results of previous games. The Clear button is available to reset the scores when desired.
- **Gameboard Themes:** Players can personalize their gameboard with a choice of three themes: pink, green, and purple.
- **Responsive Design:** The game provides consistent user experience and user-friendly interface across various screen sizes with two different layouts, for mobile phones and for larger screens.

**To Do:**
- **Alpha Beta Pruning:** Improve the existing minimax() function with Alpha Beta pruning. 
- **Keyboard Support**
## Minimax Algorithm
**Overview of the algorithm** from [Wikipedia](https://en.wikipedia.org/wiki/Minimax#Minimax_algorithm_with_alternate_moves): 'A minimax algorithm is a recursive algorithm for choosing the next move in an n-player game, usually a two-player game. A value is associated with each position or state of the game. This value is computed by means of a position evaluation function and it indicates how good it would be for a player to reach that position. The player then makes the move that maximizes the minimum value of the position resulting from the opponent's possible following moves.'
And a few words on the topic from [GeeksForGeeks](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/): 'Minimax is a kind of backtracking algorithm that is used in decision making and game theory to find the optimal move for a player, assuming that your opponent also plays optimally. It is widely used in two player turn-based games such as Tic-Tac-Toe, Backgammon, Mancala, Chess, etc.'

The algorithm itself was not covered by [The Odin Project](https://www.theodinproject.com/dashboard)'s curriculum, so the main resource I used for implementing the Minimax function was this [video](https://www.youtube.com/watch?v=P2TcQ3h0ipQ) by [FreeCodeCamp](https://www.freecodecamp.org/learn). 
It is important to mention that I found **a mistake** in the FreeCodeCamp's code, which should be resolved in order to get a fully working function. At the beginning of the minimax() function in the part that checks for different terminal states and returns a score for each state, the code looks like this: **if (checkWin(newBoard, player))**. But this if statement should actually take a huPlayer as it's parameter, so the code should be like the following: **if (checkWin(newBoard, huPlayer))**.

As I mentioned in the To Do section, the existing code could benefit from further optimization using **Alpha Beta pruning**. [Alpha-Beta pruning](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-4-alpha-beta-pruning/) is not actually a new algorithm, but rather an optimization technique for the minimax algorithm. It reduces the computation time by a huge factor. This allows us to search much faster and even go into deeper levels in the game tree. It cuts off branches in the game tree which need not be searched because there already exists a better move available.
## Tech
**The project is built with:**
- HTML
- Vanilla JavaScript
- Vanilla CSS

**Tools:**
- VS Code
- Git
## Covered Topics
**This section mentions the main topics covered during project work and prior lessons**
- Minimax Algorithm
- Module Pattern and IIFE's
- Factory Functions
- Closures
## Reflection
The project was extremely exciting, mainly because of the research and work related to the Minimax Algorithm. AI topics are something really fascinating, and I am looking forward to exploring more in the field of AI and implementing it in my own projects. 

One of the project's goals was to organize code using the Module Pattern. I encapsulated the entire code in the ticTacToe module, which returns only the startGame function, so the game can be initialized outside the module. However, the code could be further organized and modularized inside the main module. Additionally, as mentioned, the minimax() function can be further optimized using Alpha Beta pruning. Therefore, I may revisit the project in the future and refactor it a bit.
## Credits and Resources
- Icon used for the favicon image is from ['Game icons' created by Freepik - Flaticon](https://www.flaticon.com/free-icons/game).

**Minimax Algorithm Resources**
- Previously mentioned [video](https://www.youtube.com/watch?v=P2TcQ3h0ipQ) by [FreeCodeCamp](https://www.freecodecamp.org/learn).
- [Tic Tac Toe AI with Minimax Algorithm](https://thecodingtrain.com/challenges/154-tic-tac-toe-minimax) by [The Coding Train](https://thecodingtrain.com/).
- [Article series](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/) by [GeeksForGeeks](https://www.geeksforgeeks.org/).
- [Minimax and Alpha Beta pruning](https://www.youtube.com/watch?v=l-hh51ncgDI) by [Sebastian Lague](https://www.youtube.com/@SebastianLague).
## Author
- [GitHub](https://github.com/Haminimi)
- [Exercism](https://exercism.org/profiles/Haminimi)
- [LeetCode](https://leetcode.com/Haminimi/)
- Email: haminimi.dev@gmail.com
## Happy coding!