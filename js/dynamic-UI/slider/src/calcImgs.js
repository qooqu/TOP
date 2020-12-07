import state from ".";
import initSlider from "./initSlider";
// import calcImgWidth from "./calcImgWidth";

// set up state.imgs ... img info objs

const calcImgs = () => {
    state.imgInput.forEach((imgName, index) => {
        state.imgs[imgName] = {};
        state.imgs[imgName]['name'] = imgName;
        state.imgs[imgName]['img'] = (() => {
            const img = document.createElement('img');
            img.setAttribute('src', `./assets/${imgName}.jpg`);
            img.setAttribute('height', state.imgHeight);
            img.setAttribute('width', 'auto');
            img.style.position = 'absolute';
            // img.style.padding = `${state.imgPadding}px`;
            return img;
        })();
        state.imgs[imgName]['width'] = state.imgWidths[index];
    });


    // this almost worked
    // i could log state.imgs and see the proper widths
    // but i couldn't access the widths. console.log(state.imgs[1].width) returned undefined
    // that's when i gave up and hard coded the widths into state

    // // to get the inserted width: create a temp div, insert each image, extract the rendered width, remove all
    // const container = document.getElementById('container');
    // const divTemp = document.createElement('div');
    // divTemp.setAttribute('id', 'temp');
    // container.appendChild(divTemp);
    // state.imgInput.forEach(imgName => {
    //     const img = divTemp.appendChild(state.imgs[imgName].img);
    //     // note onload runs on insertion and deletion, so only naturalwidth is reliable
    //     // if you used regular width, it would get redefined on remove
    //     // the onload dies with the remove so it doesn't get refreshed later, even though the same img gets appended
    //     img.onload = function () {
    //         state.imgs[imgName]['widthooo'] = Math.round(this.naturalWidth * state.imgHeight / this.naturalHeight);
    //     }
    //     img.remove()
    // });
    // divTemp.remove();

    // console.log(state.imgs);

}

export default calcImgs