const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
btn.addEventListener('click',randomColor);
const color = document.getElementsByClassName('color');

function randomColor() {
    let rand = Math.floor(Math.random() * colors.length);
    const main = document.getElementsByTagName('main');
    main[0].style.backgroundColor = colors[rand];
    color[0].innerHTML = colors[rand];
}
