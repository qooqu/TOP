const ship = (props) => {
    const { length, posnOfFirst, dir, boardSize } = props;

    const posnInit = () => {
        let posn = [posnOfFirst];
        // assume 'out of bounds' check is done prior to calling ship
        for (let i = 1; i < length; i++) {
            switch (dir) {
                case "down":
                    posn.push(posnOfFirst + i * boardSize);
                    break;
                default:
                    break;
            }
        }
        return posn;
    };

    const posn = posnInit();

    return {
        // length,
        // posnOfFirst,
        // direction,
        // boardSize,
        length,
        posn,
        // isHit,
        // damage,
        // isSunk,
        // sunk,
    };
};

export default ship;
