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
        gridItem.addEventListener("mouseover", changeColor);
    }
});

function changeColor(e){
    const colorSelect = document.getElementById("colorSelect");
    const color = colorSelect.options[colorSelect.selectedIndex].value;
    e.target.style.backgroundColor = color;
}

let reset = document.getElementById("reset");

reset.addEventListener("mousedown", () => {
    gridContainer.innerHTML = '';
});