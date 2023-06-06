const columns = 16;
const rows = 16;

const grid = document.createElement('div');
grid.className = 'grid';
for (let i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.className = 'column';
    for (let j = 0; j < rows; j++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.textcontent = "test";
        column.appendChild(row);
    }
    grid.appendChild(column);
    grid.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
    });
}
document.body.appendChild(grid);