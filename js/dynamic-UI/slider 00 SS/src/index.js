import initSlider from "./initSlider";
import handleClick from "./handleClick";
// import calcImgWidths from './calcImgWidth'
import calcImgs from "./calcImgs";

let state = {
    imgInput: [1, 2, 3, 4, 5],
    currentImgs: [],
    imgHeight: 500,
    imgWidths: [500, 667, 667, 889, 743],
    imgPadding: 20,
    imgs: {},
    sliderPadding: 20,
};

export default state;

const imgTags = calcImgs();

// const imgWidths = calcImgWidths(imgHeight);

// const container = document.getElementById('container');

// container.appendChild(state.imgs['2'].img);

const btnRight = document.getElementById("btn-right");
btnRight.addEventListener("click", handleClick);

const sliderDiv = initSlider();
sliderDiv.setAttribute("id", "sliderDiv");

container.appendChild(sliderDiv);
