function generateRandomColor() {
    /* 256 not included */
    const max = 256;
    const r = Math.floor(Math.random() * max);
    const g = Math.floor(Math.random() * max);
    const b = Math.floor(Math.random() * max);
    return { r: r, g: g, b: b };
}

const rcgColor = document.querySelector(".rcg__color");
const rcgValueHex = document.querySelector(".rgc__hex");
const rcgValueRGB = document.querySelector(".rgc__rgb");
const rcgValueHSL = document.querySelector(".rgc__hsl");
const rcgButton = document.querySelector(".rcg__btn");

function updateColor() {
    const colorRGB = generateRandomColor();
    const colorHex = {r: colorRGB.r < 16 ? "0" + colorRGB.r.toString(16): colorRGB.r.toString(16),
    g: colorRGB.g < 16 ? "0" + colorRGB.g.toString(16): colorRGB.g.toString(16),
    b: colorRGB.b < 16 ? "0" + colorRGB.b.toString(16): colorRGB.b.toString(16)};
    const colorHSL = rgbToHsl(colorRGB.r, colorRGB.g, colorRGB.b);
    colorHSL.h = Math.round(colorHSL.h * 360);
    colorHSL.s = Math.round(colorHSL.s * 100);
    colorHSL.l = Math.round(colorHSL.l * 100);

    rcgColor.style.setProperty("--rcg-color", `rgb(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b})`);

    rcgValueHex.textContent = `#${colorHex.r}${colorHex.g}${colorHex.b}`;
    rcgValueRGB.textContent = `rgb(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b})`;
    rcgValueHSL.textContent = `hsl(${colorHSL.h}, ${colorHSL.s}%, ${colorHSL.l}%)`;
}

window.addEventListener("load", updateColor);
rcgButton.addEventListener("click", updateColor);
