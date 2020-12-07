import state from "./index";

const handleClick = (e) => {
    e.preventDefault;
    state.currentImgs.forEach((img) => {
        img.img.style.left = "300px";
    });
    console.log(state.currentImgs);
};

export default handleClick;
