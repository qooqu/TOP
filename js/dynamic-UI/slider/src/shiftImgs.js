import state from "./index";
import updateDots from "./updateDots";

const shiftImgs = (shift) => {
    if (state.indexCentered + shift < 0) {
        shift = state.imgsIn.length - 1;
    } else if (state.indexCentered + shift > state.imgsIn.length - 1) {
        shift = -(state.imgsIn.length - 1);
    }

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

// if (e.target.id == "btn-right") {
//     if (state.indexCentered != state.imgsIn.length - 1) {
//         shiftImgs(1);
//     } else {
//         shiftImgs(-(state.imgsIn.length - 1));
//     }
// }
// if (e.target.id == "btn-left") {
//     if (state.indexCentered != 0) {
//         shiftImgs(-1);
//     } else {
//         shiftImgs(state.imgsIn.length - 1);
//     }
// }
