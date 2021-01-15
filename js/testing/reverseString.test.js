const reverseString = require("./reverseString");

test("aaa", () => {
    expect(reverseString("aaa")).toBe("aaa");
});

test("aab", () => {
    expect(reverseString("aab")).toBe("baa");
});

test("abab", () => {
    expect(reverseString("abab")).toBe("baba");
});

test("aa ", () => {
    expect(reverseString("aa ")).toBe(" aa");
});
