function reverseString(str) {
    let arr = str.split("");
    return arr.reverse().toString().replace(/,/g, "");
}
module.exports = reverseString;
