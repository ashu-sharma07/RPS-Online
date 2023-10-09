const btns = document.querySelectorAll("button");
btns.forEach((btn) => btn.addEventListener("click", handleClick));

function handleClick(e) {
  const options = ["rock", "paper", "scissors"];
  const computerChoice = options[Math.floor(Math.random() * 3)];
  const humanChoice = e.target.id;
  const result = gameLogic(humanChoice, computerChoice);

  document.getElementById("human").innerHTML = funEmoji(humanChoice);
  document.getElementById("computer").innerHTML = funEmoji(computerChoice);
  document.getElementById("result").innerHTML = result;
}

function gameLogic(hChoice, cChoice) {
  if (hChoice === cChoice) {
    return "Its a draw 😁";
  }

  if (
    (hChoice === "paper" && cChoice === "rock") ||
    (hChoice === "rock" && cChoice === "scissors") ||
    (hChoice === "scissors" && cChoice === "paper")
  ) {
    return "You win 😊";
  }

  return "Computer win 🥲";
}

function funEmoji(choice) {
  if (choice === "rock") {
    return "🪨";
  }

  if (choice === "paper") {
    return "📃";
  }

  return "✂️";
}
