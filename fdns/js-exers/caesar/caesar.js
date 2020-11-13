const caesar = function (str, shift) {
    shift = shift % 26;
    let aCode = 65;
    let zCode = 90;
    let ACode = 97;
    let ZCode = 122;
    let newStr = '';
    str.split('').forEach(ele => {
        let eleCode = ele.charCodeAt(0);
        let newCode;
        if (eleCode >= aCode && eleCode <= zCode || eleCode >= ACode && eleCode <= ZCode) {
            if (eleCode + shift > ZCode) {
                newCode = (ACode - 1) + (eleCode + shift - ZCode);
            } else if (eleCode <= zCode && eleCode + shift > zCode) {
                newCode = (aCode - 1) + (eleCode + shift - zCode);
            } else if (eleCode + shift < aCode) {
                newCode = (zCode + 1) + (eleCode + shift - aCode);
            } else if (eleCode >= ACode && eleCode + shift < ACode) {
                newCode = (ZCode + 1) + (eleCode + shift - ACode);
            } else {
                newCode = eleCode + shift;
            }
            let newChar = String.fromCharCode(newCode);
            newStr += newChar;
        } else {
            newStr += ele;
        }
    });
    return newStr;
}

module.exports = caesar
