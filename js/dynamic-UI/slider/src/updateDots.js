import state from "./index";

const updateDots = () => {
    state.dots.forEach((dot) => {
        dot.id == state.indexCentered
            ? dot.classList.add("current")
            : dot.classList.remove("current");
    });
};

export default updateDots;
