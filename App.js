const diceImages = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
  ];

  let currentPlayer = 1;
  let player1Score = 0;
  let player2Score = 0;
  const winningScore = 100;

  function rollDice() {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').src = `dice${roll1}.png`;
    document.getElementById('dice2').src = `dice${roll2}.png`;

    const total = roll1 + roll2;
    updateScore(total);
    displayResult(total);
  }

  function updateScore(total) {
    if (total !== 2) {
      if (currentPlayer === 1) {
        player1Score += total;
      } else {
        player2Score += total;
      }
      document.getElementById('scores').innerText = `Player 1: ${player1Score} | Player 2: ${player2Score}`;

      if (player1Score >= winningScore || player2Score >= winningScore) {
        declareWinner();
      }
    }
  }

  function displayResult(total) {
    const resultElement = document.getElementById('result');

    if (total === 2) {
      resultElement.textContent = `Player ${currentPlayer} rolled a 1. Switching turns.`;
      currentPlayer = (currentPlayer === 1) ? 2 : 1;
    } else {
      resultElement.textContent = `Player ${currentPlayer}'s turn: Total score is ${total}`;
    }
  }

  function declareWinner() {
    const winnerElement = document.getElementById('winner');
    winnerElement.textContent = `Player ${currentPlayer} wins!`;
    currentPlayer = 0;
  }