function randomColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
randomColor();

function makeGrid(rows, columns){
const container = document.querySelector('.container');

const grid = document.createElement('div');
grid.className = 'grid';
for (let i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.className = 'column';
    for (let j = 0; j < rows; j++) {
        const row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
    }
    grid.appendChild(column);
    column.addEventListener('mouseover', (e) => {
        if(document.getElementById('random-toggle').checked) {
            //sets a random color when hovered
            e.target.style.background = randomColor();
            e.target.style.opacity = 1;
        }else if(document.getElementById('black-toggle').checked) {

            //sets black when hovered
            e.target.style.background = 'black';
            e.target.style.opacity = 1;
        // }else if(document.getElementById('gradient-toggle').checked) {

            //sets background to get darker every mouseover
            // e.target.style.background = 'black';
            // if (!e.target.style.opacity) e.target.style.opacity = "0";
            // opacity = parseFloat(e.target.style.opacity);
            // e.target.style.opacity = opacity + 0.2;
        }
    });
}

container.appendChild(grid);
}
makeGrid(5,5);

function newReset() {
    let userPrompt = prompt("Please enter the amount of squares per side", 5);
    const container = document.querySelector('.container');
    container.innerHTML = "";
    if (isNaN(userPrompt) || userPrompt > 100 || userPrompt <= 0) {
        alert("You must enter a number between 1 and 100");
        container.innerHTML = "";
        makeGrid(5,5);
    } else {
    makeGrid(userPrompt, userPrompt);
    };
};