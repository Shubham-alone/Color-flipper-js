const body = document.querySelector('body');
const greenBtn = document.querySelector('.green');
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const randomBtn = document.querySelector('.random');

greenBtn.addEventListener('click', () => {
    console.log("green");
    body.style.backgroundColor = 'green';
});

redBtn.addEventListener('click', () => {
    console.log("red");
    body.style.backgroundColor = 'red';
});

blueBtn.addEventListener('click', () => {
    console.log("blue");
    body.style.backgroundColor = 'blue';
});

randomBtn.addEventListener('click', () => {
    console.log('random');
    randomColor()
})



function randomColor () {
    const red = Math.round(Math.random() * 255);

    const green = Math.round(Math.random() * 255);

    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
};






