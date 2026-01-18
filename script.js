let nickname = localStorage.getItem("nickname");
let points = localStorage.getItem("points")
  ? parseInt(localStorage.getItem("points"))
  : 1000;

if (nickname) {
  document.getElementById("login").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("nickname").innerText = nickname;
  updatePoints();
}

function startGame() {
  const input = document.getElementById("nicknameInput").value;
  if (!input) return alert("닉네임을 입력하세요!");

  nickname = input;
  localStorage.setItem("nickname", nickname);
  localStorage.setItem("points", points);

  document.getElementById("login").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("nickname").innerText = nickname;
  updatePoints();
}

function updatePoints() {
  document.getElementById("points").innerText = points;
  localStorage.setItem("points", points);
}

function showGame(game) {
  document.getElementById("oddEven").style.display = "none";
  document.getElementById("ladder").style.display = "none";
  document.getElementById(game).style.display = "block";
}

function playOddEven(choice) {
  const bet = parseInt(document.getElementById("oddEvenBet").value);
  if (!bet || bet > points) return alert("배팅 금액 확인!");

  const num = Math.floor(Math.random() * 10) + 1;
  const result = num % 2 === 0 ? "even" : "odd";

  if (choice === result) {
    points += bet;
    document.getElementById("oddEvenResult").innerText =
      `숫자 ${num} → 승리!`;
  } else {
    points -= bet;
    document.getElementById("oddEvenResult").innerText =
      `숫자 ${num} → 패배`;
  }
  updatePoints();
}

function playLadder(choice) {
  const bet = parseInt(document.getElementById("ladderBet").value);
  if (!bet || bet > points) return alert("배팅 금액 확인!");

  const result = ["A", "B", "C"][Math.floor(Math.random() * 3)];

  if (choice === result) {
    points += bet;
    document.getElementById("ladderResult").innerText =
      `결과 ${result} → 승리!`;
  } else {
    points -= bet;
    document.getElementById("ladderResult").innerText =
      `결과 ${result} → 패배`;
  }
  updatePoints();
}
