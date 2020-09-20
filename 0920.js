const data = [100, 200, 300, 400, 500];

function init() {
  drawTable();
  disCount(data, 0.1);
  createLine();
  drawTable();
}

function drawTable() {
  let htmlString = "";
  for(let i=0; i< data.length; i++) {
    const p = document.createElement('p');
    p.innerHTML += data[i];
    document.body.appendChild(p);

  }
  return htmlString;
}

function disCount(data, value) {
  for(let i=0; i<data.length; i++) {
    data[i] -= data[i] * value;
  }
  return data;
}

function createLine() {
  const line = document.createElement('hr');
  document.body.appendChild(line);
}

init();