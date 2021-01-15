const capitalize = require("./capitalize");

test("aaa", () => {
    expect(capitalize("aaa")).toBe("AAA");
});

test("a a", () => {
    expect(capitalize("a a")).toBe("A A");
});

test("a,a", () => {
    expect(capitalize("a,a")).toBe("A,A");
});

test("1", () => {
    expect(capitalize("1")).toBe("1");
});
