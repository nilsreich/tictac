/* eslint-disable no-use-before-define */
let player = "a";
let points = { a: 0, b: 0 };
const tttAreaDIV = document.querySelector(".ttt-area");
const cellsDIV = document.querySelectorAll(".ttt-area div");
const modalDIV = document.querySelector(".modal");
const scoreDIV = document.querySelector(".score")
modalDIV.querySelector(".reset").addEventListener("click", render)
function controlLines(cellIndex) {
  /* get vertical and horizontal rows in which the cell is 
  located by adding the first cell of each row "min", the 
  second cell min + 1 and the third cell min + 2 to the row 
  array 
  cellIndex % 3 = column of the cell*/
  const lines = [];
  // vertical row
  const minV = cellIndex % 3;
  const verticalLine = [minV, minV + 3, minV + 6];
  lines.push(verticalLine);
  // horizontal row
  const minH = cellIndex - (cellIndex % 3);
  const horizontalLine = [minH, minH + 1, minH + 2];
  lines.push(horizontalLine);
  // diagonal row
  if (cellIndex === 0 || cellIndex === 8) lines.push([0, 4, 8]);
  else if (cellIndex === 2 || cellIndex === 6) lines.push([2, 4, 6]);
  else if (cellIndex === 4) lines.push([0, 4, 8], [2, 4, 6]);
  // control lines
  return lines.some(row =>
    // checks that every cell in the row contains the same class
    row.every(index => cellsDIV[index].classList.contains(player))
  )
    ? "point"
    // checks whether each cell contains a class
    : lines.every(row =>
        row.every(index => cellsDIV[index].classList.length === 1)
      )
    ? "draw"
    : false;
}

function render() {
  modalDIV.classList.add("hidden");
  // remove classes
  cellsDIV.forEach(cell => {
    cell.classList.remove("a");
    cell.classList.remove("b");
  });
}

cellsDIV.forEach((cell, index) =>
  cell.addEventListener("click", function() {
    if (this.className === "a" || this.className === "b") return;
    this.className = player;
    let status = controlLines(index);
    if (status) {
      modalDIV.classList.remove("hidden");
      modalDIV.querySelector(".winner").textContent =
        status === "draw" ? "DRAW" : player === "a" ? "RED WINS" : "BLUE WINS";
      if(status === "point")
        points[player]++
        scoreDIV.children[0].textContent = points.a
        scoreDIV.children[1].textContent = points.b
    }
    player = player === "a" ? "b" : "a";
  })
);
