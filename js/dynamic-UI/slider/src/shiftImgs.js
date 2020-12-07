import state from "./index";
import updateDots from "./updateDots";

const shiftImgs = (shift) => {
    state.imgs.forEach((img) => {
        const currentShift = img.style.left
            ? Number.parseInt(img.style.left.replace("px", ""))
            : 0;
        img.style.left = `${
            currentShift - shift * (state.imgWidth + 2 * state.imgPadding)
        }px`;
    });
    state.indexCentered = state.indexCentered + shift;
    updateDots();
};

export default shiftImgs;
