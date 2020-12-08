import state from "./index";
import shiftImgs from "./shiftImgs";

const handleBtnClick = (e) => {
    e.preventDefault;
    e.target.id == "btn-right" ? shiftImgs(1) : shiftImgs(-1);
};

export default handleBtnClick;
