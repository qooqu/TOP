import state from "./index";
import shiftImgs from "./shiftImgs";

const handleDotClick = (e) => {
    e.preventDefault;
    const shift = e.target.id - state.indexCentered;
    shiftImgs(shift);
};

export default handleDotClick;
