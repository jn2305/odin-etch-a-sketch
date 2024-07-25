const gridContainer = document.getElementById("myGrid");

let sizeForm = document.getElementById("sizeForm");

sizeForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    gridContainer.innerHTML = '';

    let rows = parseInt(document.getElementById("inputHeight").value);
    let cols = parseInt(document.getElementById("inputWidth").value);

    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 40px)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 40px)`;

    for (let i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = "grid-item";
        gridContainer.append(gridItem);
    }
});