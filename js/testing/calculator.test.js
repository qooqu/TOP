const calculator = require("./calculator");

test("1+2", () => {
    expect(calculator.add(1, 2)).toEqual(3);
});

test("6-2", () => {
    expect(calculator.subtract(6, 2)).toEqual(4);
});

test("12*17", () => {
    expect(calculator.multiply(12, 17)).toEqual(204);
});

test("25/5", () => {
    expect(calculator.divide(25, 5)).toEqual(5);
});
