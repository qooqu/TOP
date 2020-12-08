import state from "./index";
import handleBtnClick from "./handleBtnClick";
import shiftImgs from "./shiftImgs";
import updateDots from "./updateDots";
import handleDotClick from "./handleDotClick";

const initSlider = () => {
    const btnRight = document.getElementById("btn-right");
    btnRight.addEventListener("click", handleBtnClick);
    const btnLeft = document.getElementById("btn-left");
    btnLeft.addEventListener("click", handleBtnClick);

    const sliderDiv = document.getElementById("slider");

    state.imgsIn.forEach((imgName) => {
        const img = document.createElement("img");
        img.setAttribute("src", `./assets/${imgName}.jpg`);
        img.style.width = `${state.imgWidth}px`;
        img.style.padding = `${state.imgPadding}px`;
        state.imgs.push(img);
        sliderDiv.appendChild(img);
    });

    state.indexCentered = state.imgsIn.length / 2 - 0.5;
    shiftImgs(-(state.imgsIn.length / 2 - 0.5));
    state.indexCentered = 0;

    const dotsDiv = document.getElementById("dots");
    state.imgsIn.forEach((imgName, index) => {
        const dot = document.createElement("button");
        dot.id = index;
        dot.classList.add("dot");
        dot.addEventListener("click", handleDotClick);
        state.dots.push(dot);
        dotsDiv.appendChild(dot);
    });
    updateDots();
};

export default initSlider;
