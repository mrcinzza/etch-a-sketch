const gridContainer = document.getElementById("grid-container");
const gridItem = document.querySelectorAll(".grid-item");

let defaultSize = 16;

function gridGenerator(rows, cols) {
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`


    for (let i = 0; i < (rows * cols); i++) {
        gridContainer.innerHTML += "<div id='grid-item' class='grid-item'></div>";
    }
}

function mouseOver() {
    document.querySelectorAll(".grid-item").forEach(
        gridItem => gridItem.addEventListener("mouseover", e => e.target.classList.add("grid-item-black"))
    );
}

window.onload = () => {
    gridGenerator(defaultSize, defaultSize);
    mouseOver();
}