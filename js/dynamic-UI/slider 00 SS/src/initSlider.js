import state from "./index";

const initSlider = () => {
    const div = document.createElement("div");
    div.style.position = "relative";

    state.currentImgs = [
        state.imgs[state.imgInput[state.imgInput.length - 1]],
        state.imgs[state.imgInput[0]],
        state.imgs[state.imgInput[1]],
    ];

    const imgLeftWidth = Number.parseInt(state.currentImgs[0].width);
    const imgMidWidth = Number.parseFloat(state.currentImgs[1].width);
    const imgRightWidth = Number.parseInt(state.currentImgs[2].width);

    // console.log(state.currentImgs[0]);
    // console.log(state.currentImgs[0].width);

    const imgLeftLeft = -imgMidWidth / 2 - state.imgPadding - imgLeftWidth;
    const imgMidLeft = -imgMidWidth / 2;
    const imgRightLeft = imgMidWidth / 2 + state.imgPadding;

    state.currentImgs[0].img.style.left = `${imgLeftLeft}px`;
    state.currentImgs[1].img.style.left = `${imgMidLeft}px`;
    state.currentImgs[2].img.style.left = `${imgRightLeft}px`;

    state.currentImgs.forEach((img) => {
        div.appendChild(img.img);
    });

    return div;
};

export default initSlider;
