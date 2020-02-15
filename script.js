/* eslint-disable no-use-before-define */
let player = "a";
let clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const tttAreaDIV = document.querySelector(".ttt-area");
const cellsDIV = document.querySelectorAll(".ttt-area div");
const modalDIV = document.querySelector(".modal");
function controlLines(cell, cellIndex) {
  /* get vertical and horizontal rows in which the cell is 
  located by adding the first cell of each row "min", the 
  second cell min + 1 and the third cell min + 2 to the row 
  array 
  cellIndex % 3 = column of the cell*/
  // vertical row
  const minV = cellIndex % 3
  const verticalLine = [clicked[minV], clicked[minV + 3], clicked[minV + 6]];
  
  // horizontal row
  const minH = cellIndex - (cellIndex % 3)
  const horizontalLine = [clicked[minH], clicked[minH+1], clicked[minh=2]]
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
      modalDIV.querySelector("#winner").textContent = "RED WINS!";
    }
    if (min.includes(-3)) {
      modalDIV.querySelector("#winner").textContent = "BLUE WINS!";
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

function setSymbol(e, index) {
  const cell = e.target;
  if (cell.className === "clickedA" || cell.className === "clickedB") return;
  cell.className = `clicked${player.toUpperCase()}`;
  if (player === "a") {
    clicked[index] = 1;
  } else {
    clicked[index] = -1;
  }
  controlLines(cell, index);
  player = player === "a" ? "b" : "a";
}

cellsDIV.forEach((cell, i) =>
  cell.addEventListener("click", e => setSymbol(e, i))
);
