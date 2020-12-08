import initSlider from "./initSlider";
import shiftImgs from "./shiftImgs";

let state = {
    imgsIn: [1, 2, 3, 4, 5],
    imgs: [],
    indexCentered: null,
    imgWidth: 500,
    imgPadding: 20,
    dots: [],
};

export default state;

initSlider();
setInterval(shiftImgs, 5000, 1);
