function generateRandomColor() {
    /* 256 not included */
    const max = 256;
    const r = Math.floor(Math.random() * max);
    const g = Math.floor(Math.random() * max);
    const b = Math.floor(Math.random() * max);
    return { r: r, g: g, b: b };
}

function formatColor(color, type) {
    let formatted = "";
    if (color != null) {
        if (type === "RGB") {
            formatted = `rgb(${color.r}, ${color.g}, ${color.b})`;
        } else if (type == "HSL") {
            const colorHSL = rgbToHsl(color.r, color.g, color.b);
            colorHSL.h = Math.round(colorHSL.h * 360);
            colorHSL.s = Math.round(colorHSL.s * 100);
            colorHSL.l = Math.round(colorHSL.l * 100);
            formatted = `hsl(${colorHSL.h}, ${colorHSL.s}%, ${colorHSL.l}%)`;
        } else {
            const colorHex = {
                r: color.r < 16 ? "0" + color.r.toString(16) : color.r.toString(16),
                g: color.g < 16 ? "0" + color.g.toString(16) : color.g.toString(16),
                b: color.b < 16 ? "0" + color.b.toString(16) : color.b.toString(16)
            };
            formatted = `#${colorHex.r}${colorHex.g}${colorHex.b}`;
        }
    }
    return formatted;
}

const rcgColor = document.querySelector(".rcg__color");
const rcgValueHex = document.querySelector(".rgc__hex");
const rcgValueRGB = document.querySelector(".rgc__rgb");
const rcgValueHSL = document.querySelector(".rgc__hsl");
const rcgButton = document.querySelector(".rcg__btn");
const rcgRedInput = document.querySelector("#red");
const rcgGreenInput = document.querySelector("#green");
const rcgBlueInput = document.querySelector("#blue");

function updateColor(color) {
    rcgColor.style.setProperty("--rcg-color", formatColor(color));

    rcgValueHex.textContent = formatColor(color);
    rcgValueRGB.textContent = formatColor(color, "RGB");
    rcgValueHSL.textContent = formatColor(color, "HSL");

    rcgRedInput.value = color.r;
    rcgGreenInput.value = color.g;
    rcgBlueInput.value = color.b;
}

function createColor() {
    const red = parseInt(rcgRedInput.value, 10);
    const green = parseInt(rcgGreenInput.value, 10);
    const blue = parseInt(rcgBlueInput.value, 10);

    const color = {r: red, g: green, b: blue};
    updateColor(color);
}

function randomColor() {
    const color = generateRandomColor();
    updateColor(color);
}

window.addEventListener("load", randomColor);
rcgButton.addEventListener("click", randomColor);

rcgRedInput.addEventListener("input", createColor);
rcgGreenInput.addEventListener("input", createColor);
rcgBlueInput.addEventListener("input", createColor);
