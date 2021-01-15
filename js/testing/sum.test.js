const sum = require("./sum");

test("1+2=3", () => {
    expect(sum(1, 2)).toEqual(3);
});

test("105+67=172", () => {
    expect(sum(105, 67)).toEqual(172);
});
