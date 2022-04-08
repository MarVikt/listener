const btn = document.getElementById('btn');
const btnInCircle = document.getElementById('e_btn');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const range = document.getElementById('range');
let inputText = document.getElementById('text');

const changeColorSquare = function () {
  square.style.background = inputText.value;
};

const changeCircle = function (event) {
  circle.style.width = event.target.value + '%';
  circle.style.height = event.target.value + '%';
};

btn.addEventListener('click',changeColorSquare);
btnInCircle.style.display = 'none';
range.addEventListener('change',changeCircle);
