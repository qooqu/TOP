import state from "./index";
import shiftImgs from "./shiftImgs";

const handleBtnClick = (e) => {
    e.preventDefault;
    if (e.target.id == "btn-right") {
        if (state.indexCentered != state.imgsIn.length - 1) {
            shiftImgs(1);
        } else {
            shiftImgs(-(state.imgsIn.length - 1));
        }
    }
    if (e.target.id == "btn-left") {
        if (state.indexCentered != 0) {
            shiftImgs(-1);
        } else {
            shiftImgs(state.imgsIn.length - 1);
        }
    }
};

export default handleBtnClick;
