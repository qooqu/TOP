const btnNew = document.getElementById('btn-new');
btnNew.addEventListener('click', handleClick);

const canvas = document.getElementById('canvas');
let side = 50;
newCanvas(side);

function handleClick(e) {
    clearCanvas();
    let side = getSide();
    newCanvas(side);
}

function clearCanvas() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function getSide() {
    let side = prompt('how wide? (max 100)');
    side = Math.min(side, 100);
    return side;
}

function newCanvas(side) {
    canvas.setAttribute('style', `display: grid; grid-template-columns: repeat(${side}, 1fr); grid-template-rows: repeat(${side}, 1fr)`);
    for (let i = 0; i < side * side; i++) {
        let pixel = document.createElement('div');
        pixel.setAttribute('style', 'background: black; opacity: 0');
        pixel.addEventListener('mouseenter', handleMouseEnter);
        canvas.appendChild(pixel);
    }
}

function handleMouseEnter(e) {
    let current = parseFloat(e.target.style.opacity);
    let updated = Math.min(current + 0.25, 1);
    e.target.style.opacity = updated;
}