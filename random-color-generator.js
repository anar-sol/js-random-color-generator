function generateRandomColor() {
    /* 256 not included */
    const max = 256;
    const r = Math.floor(Math.random() * max);
    const g = Math.floor(Math.random() * max);
    const b = Math.floor(Math.random() * max);
    return { r: r, g: g, b: b };
}

const rcgColor = document.querySelector(".rcg__color");
const rcgButton = document.querySelector(".rcg__btn");

function updateColor() {
    const color = generateRandomColor();
    rcgColor.style.setProperty("--rcg-color", `rgb(${color.r}, ${color.g}, ${color.b})`);
}

window.addEventListener("load", updateColor);
rcgButton.addEventListener("click", updateColor);
