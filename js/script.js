let time = document.createElement("span");
time.textContent = 0;
let playedTime = document.getElementById("numberOftime");
playedTime.appendChild(time);
let tie = document.createElement("span");
tie.textContent = 0;
let playedTie = document.getElementById("numberOftie");
playedTie.appendChild(tie);
let win = document.createElement("span");
win.textContent = 0;
let playedWin = document.getElementById("numberOfwin");
playedWin.appendChild(win);
let lose = document.createElement("span");
lose.textContent = 0;
let playedLose = document.getElementById("numberOflost");
playedLose.appendChild(lose);
let whatYouGot = document.getElementById("you_got");
let whatyouGot = document.createElement("h4");
whatyouGot.textContent = "";
whatYouGot.appendChild(whatyouGot);
setInterval(yourMove(s), 2000);
function yourMove(s) {
  let move = Math.random();
  let computerMove;
  if (move > 0 && move < 1 / 3) {
    computerMove = "rock";
    console.log(computerMove);
  } else if (move > 1 / 3 && move < 2 / 3) {
    computerMove = "paper";
    console.log(computerMove);
  } else {
    computerMove = "scissor";
    console.log(computerMove);
  }
  if (s == computerMove) {
    tie.textContent++;
    whatyouGot.textContent = `Computer move: ${computerMove}      Your move: ${s}
    you Tie.  Try again..`;
  } else {
    if (s == "rock" && computerMove == "scissor") {
      win.textContent++;
      whatyouGot.textContent = `Computer move: ${computerMove}     Your move: ${s}
      you WON!!!..`;
    } else if (s == "rock" && computerMove == "paper") {
      lose.textContent++;
      whatyouGot.textContent = `Computer move: ${computerMove}     Your move: ${s}
      you Lose.  try again..`;
    } else if (s == "paper" && computerMove == "rock") {
      win.textContent++;
      whatyouGot.textContent = `Computer move: ${computerMove}  Your move: ${s}
      you WON!!!..`;
    } else if (s == "paper" && computerMove == "scissor") {
      lose.textContent++;
      whatyouGot.textContent = `Computer move: ${computerMove}     Your move: ${s}
      you Lose.  try again..`;
    } else if (s == "scissor" && computerMove == "paper") {
      win.textContent++;
      whatyouGot.textContent = `Computer move: ${computerMove}  Your move: ${s}
      you WON!!!..`;
    } else if (s == "scissor" && computerMove == "rock") {
      lose.textContent++;
      whatyouGot.textContent = `Computer move: ${computerMove}     Your move: ${s}
      you Lose.  try again..`;
    }
  }
  time.textContent++;
}
