const cells = document.querySelectorAll("[data-cell]");
const statusText = document.getElementById("statusText");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");
const restartBtn = document.getElementById("restart");

let turn = true;
let gameActive = true;
let scores = { x: 0, o: 0 };

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const startGame = () => {
  turn = true;
  gameActive = true;
  statusText.innerText = "Player ✕ Turn";
  statusText.style.color = "#0000ff";
  statusText.style.textShadow = "0 0 15px #0000ff";

  cells.forEach((cell) => {
    cell.classList.remove("x", "o");
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
};

const handleClick = (e) => {
  if (!gameActive) return;
  const cell = e.target;
  const currentClass = turn ? "x" : "o";

  cell.classList.add(currentClass);

  if (checkWin(currentClass)) {
    endGame(false, currentClass);
  } else if (isDraw()) {
    endGame(true);
  } else {
    turn = !turn;
    statusText.innerText = turn ? "Player ✕ Turn" : "Player ⭕ Turn";
    statusText.style.color = turn ? "blue" : "red";
    statusText.style.textShadow = turn
      ? "0 0 15px #0000ff"
      : "0 0 15px #ff0000";
  }
};

const checkWin = (currentClass) => {
  return winConditions.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentClass);
    });
  });
};

const isDraw = () => {
  return [...cells].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("o");
  });
};

const endGame = (draw, winner) => {
  gameActive = false;
  if (draw) {
    statusText.innerText = "Tie!";
    statusText.style.color = "white";
    statusText.style.textShadow = "0 0 15px #fff";
  } else {
    const winnerSymbol = winner === "x" ? "✕" : "⭕";
    statusText.innerText = `Winner: Player ${winnerSymbol}`;
    statusText.style.color = winner === "x" ? "blue" : "red";
    scores[winner]++;
    scoreX.innerText = scores.x;
    scoreO.innerText = scores.o;
  }
};

restartBtn.addEventListener("click", startGame);
startGame();
