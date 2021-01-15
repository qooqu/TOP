import ship from "./ship";

// Begin your app by creating the Ship factory function.
// Your ‘ships’ will be objects that include their length, where they’ve been hit and whether or not they’ve been sunk.
// REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
// Ships should have a hit() function that takes a number and then marks that position as ‘hit’.
// isSunk() should be a function that calculates it based on their length and whether all of their positions are ‘hit’.

// ship should accept length, position of first, direction (up, down, left, right), and size of board
// ship should return an object with
// ID
// length: number
// position: array of occupied squares
// damage: array of T/F
// hit: function that takes a number, checks for index in positionArr, and flips that index in damage
// sunk: T/F
// isSunk: function that checks if number of hits == length

// ship should return an object ... can't find a way to test this

// it("should multiply two numbers", () => {
//     // Arrange
//     const first = 2;
//     const second = 2;
//     const expectedResult = 4;

//     // Act
//     const result = multiplyTwoNumbers(first, second);

//     // Assert
//     expect(result).toEqual(expectedResult);
// });

it("should return ship object", () => {
    // Arrange
    const length = 3;
    const posnOfFirst = 2;
    const dir = "down";
    const boardSize = 8;

    const props = {
        length,
        posnOfFirst,
        dir,
        boardSize,
    };

    const expectedResult = {
        // length: length,
        // posnOfFirst: posnOfFirst,
        // direction: direction,
        // boardSize: boardSize,
        length,
        posn: [2, 10, 18],
        // checkHit: "function",
        // damage: false,
        // checkSunk: "function",
        // sunk: false,
    };

    // Act
    const result = ship(props);

    // Assert
    // expect(result.length).toEqual(expectedResult.length);
    // expect(result.position).toEqual(expectedResult.position);
    expect(result).toEqual(expectedResult);
    // expect(result).toMatchObject(expectedResult);
});
