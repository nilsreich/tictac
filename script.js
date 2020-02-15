/* eslint-disable no-use-before-define */
let player = "a";
let clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const tttAreaDIV = document.querySelector(".ttt-area");
const cellsDIV = document.querySelectorAll(".ttt-area div");
const modalDIV = document.querySelector(".modal");
function wergewinnt() {
  const sumh = [
    clicked[0] + clicked[1] + clicked[2],
    clicked[3] + clicked[4] + clicked[5],
    clicked[6] + clicked[7] + clicked[8]
  ];
  const sumv = [
    clicked[0] + clicked[3] + clicked[6],
    clicked[1] + clicked[4] + clicked[7],
    clicked[2] + clicked[5] + clicked[8]
  ];
  const sumd = [
    clicked[0] + clicked[4] + clicked[8],
    clicked[2] + clicked[4] + clicked[6]
  ];

  const max = [Math.max(...sumh), Math.max(...sumv), Math.max(...sumd)];
  const min = [Math.min(...sumh), Math.min(...sumv), Math.min(...sumd)];

  if (max.includes(3) || min.includes(-3)) {
    if (max.includes(3)) {
      document.getElementById("winner").innerHTML = "RED WINS!";
    }
    if (min.includes(-3)) {
      document.getElementById("winner").innerHTML = "BLUE WINS!";
    }
    // display modal
    modalDIV.classList.remove("hidden");
    modalDIV.querySelector("#reset").addEventListener("click", render);
  }
}

function render() {
  modalDIV.classList.add("hidden");
  clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  // remove classes
  cellsDIV.forEach(cell => {
    cell.classList.remove("clickedA");
    cell.classList.remove("clickedB");
  });
}

function setSymbol(e) {
  const cell = e.target;
  if (cell.className === "clickedA" || cell.className === "clickedB" ) return;
  cell.className = `clicked${player.toUpperCase()}`
  if (player === "a") {
    clicked[cell.id] = 1;
  } else {
    clicked[cell.id] = -1;
  }
  wergewinnt();
  player = player === "a" ? "b" : "a";
}

cellsDIV.forEach(cell => cell.addEventListener("click", setSymbol))
