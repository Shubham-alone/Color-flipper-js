const bod = document.querySelector('body');

//bod.style.backgroundColor = 'grey';

function setColor (name) {
    bod.style.backgroundColor = name;
};

function randomColor () {
    const red = Math.round(Math.random() * 255);

    const green = Math.round(Math.random() * 255);

    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    bod.style.backgroundColor = color;
};






