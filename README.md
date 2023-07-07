# Tic Tac Toe Game
 This is a simple implementation of the classic game Tic Tac Toe using React.
 ## Components
 -  `Box` : This is the individual cell in the game.
-  `Drawbox` : This component displays a message when the game is a draw.
-  `Line` : This component is responsible for drawing the winning line.
-  `Winnerbox` : This component displays a message when there is a winner.
-  `TbReload` : This is a reload icon from  `react-icons`  used to reset the game.
 ## Game Logic
 The game logic is implemented in the  `Game`  function. 
 - The game state is managed using React's  `useState`  hook. The states include  `gamearray`  (the current state of the game),  `turnX`  (whose turn it is),  `winner`  (the winner of the game),  `isFull`  (whether the game board is full or not), and  `winIndex`  (the indices of the winning combination).
 - A  `winningMatrix`  is defined which contains all possible winning combinations.
 -  `calculateWinner`  function checks if there is a winner based on the  `winningMatrix` .
 -  `useEffect`  hook is used to call  `calculateWinner`  and  `checkFull`  (a function to check if the game board is full) whenever the game state changes.
 -  `handleClick`  function handles the click event on a cell. It checks if the game has a winner and if the clicked cell is empty. If both conditions are met, it updates the game state and toggles the turn.
 -  `reload`  function resets the game state.
 ## Rendering
 The game board is rendered as a grid of  `Box`  components. Each  `Box`  component receives its value and click event handler as props.
 The  `Line`  component is rendered with  `winIndex`  and  `winner`  as props.
 A reload button is rendered using the  `TbReload`  component with a click event handler that calls the  `reload`  function.
 The  `Winnerbox`  and  `Drawbox`  components are conditionally rendered based on the  `winner`  and  `isFull`  states.
 ## Installation and Usage
 - Clone the repository
- Run  `npm install`  to install dependencies
- Run  `npm start`  to start the game
 ## Dependencies
 - React
- react-icons
- @/components/box
- @/components/draw
- @/components/line
- @/components/winner