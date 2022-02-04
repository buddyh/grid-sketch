const container = document.querySelector('.container');
const gridDiv = document.createElement('div');
const gridSquare = document.querySelectorAll('.gridsquare');
const clearButton = document.querySelector("#clear");
const rgbButton = document.querySelector('#rgb');
const blackButton = document.querySelector('#black');

gridNum = prompt('How many squares would you like?');
const squareWidthHeight = `${500/gridNum}px`;

gridDiv.className = 'gridsquare';
gridDiv.style.width = `${squareWidthHeight}`;
gridDiv.style.height = `${squareWidthHeight}`;

function createGrid(squareNum) {
  for (let i = 1; i <= squareNum*squareNum; i++) {
    container.appendChild(gridDiv.cloneNode(true));   
  };
};

createGrid(gridNum);

function drawMouse(e) {
     e.stopPropagation();
     e.target.style.backgroundColor='black';
 }

 function drawMouseBlack() {
    divs.forEach(div => div.addEventListener('mouseover', function (e) {
        e.stopPropagation();
        e.target.style.backgroundColor='black';
  }));
}

 function drawMouseRGB() {
    divs.forEach(div => div.addEventListener('mouseover', function (e) {
        e.stopPropagation();
        e.target.style.backgroundColor=`rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
  }));
}

const divs = Array.from(document.querySelectorAll('.gridsquare'));
divs.forEach(div => div.addEventListener('mouseover', drawMouse));


function clearGrid() {
    divs.forEach(div => div.style.backgroundColor=null);
}

clearButton.addEventListener('click', clearGrid);
rgbButton.addEventListener('click', drawMouseRGB);
blackButton.addEventListener('click', drawMouseBlack);