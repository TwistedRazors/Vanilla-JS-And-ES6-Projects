const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
btn.addEventListener('click',randomColor);
const color = document.getElementsByClassName('color');

function randomColor() {
    let rand = 0;
    let randColor = "#";
    for (let i = 1; i <= 6; i++) {
        rand = Math.floor(Math.random() * hex.length);
        randColor += hex[rand];
    }
    const main = document.getElementsByTagName('main');
    main[0].style.backgroundColor = randColor;
    color[0].innerHTML = randColor;

    
}