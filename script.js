/* eslint-disable no-use-before-define */
let count = 0;
let clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function wergewinnt() {
  const sumh = [clicked[0] + clicked[1] + clicked[2],
    clicked[3] + clicked[4] + clicked[5],
    clicked[6] + clicked[7] + clicked[8]];
  const sumv = [clicked[0] + clicked[3] + clicked[6],
    clicked[1] + clicked[4] + clicked[7],
    clicked[2] + clicked[5] + clicked[8]];
  const sumd = [clicked[0] + clicked[4] + clicked[8], clicked[2] + clicked[4] + clicked[6]];

  const max = [Math.max(...sumh), Math.max(...sumv), Math.max(...sumd)];
  const min = [Math.min(...sumh), Math.min(...sumv), Math.min(...sumd)];

  if ((max.includes(3)) || (min.includes(-3))) {
    if (max.includes(3)) { document.getElementById('winner').innerHTML = 'RED WINS!'; }
    if (min.includes(-3)) { document.getElementById('winner').innerHTML = 'BLUE WINS!'; }
    document.getElementById('modal').style.display = 'block';
    document.getElementById('par').removeEventListener('click', kreuzesetzen);
    document.getElementById('reset').addEventListener('click', reset);
  }
}

function reset() {
  document.getElementById('modal').style.display = 'none';
  count = 0;
  clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  document.getElementById('par').addEventListener('click', kreuzesetzen);
  document.getElementById('reset').removeEventListener('click', reset);
  for (let i = 0; i < 9; i += 1) {
    document.getElementById(i).classList.remove('clickedA');
    document.getElementById(i).classList.remove('clickedB');
  }
}

function kreuzesetzen(e) {
  if (e.target.className !== 'clickedA' && e.target.className !== 'clickedB') {
    if (count % 2 === 0) {
      e.target.className = 'clickedA';
      clicked[e.target.id] = 1;
    } else {
      e.target.className = 'clickedB';
      clicked[e.target.id] = -1;
    }
    wergewinnt(e.target.className);
    count += 1;
  }
}

document.getElementById('par').addEventListener('click', kreuzesetzen);
