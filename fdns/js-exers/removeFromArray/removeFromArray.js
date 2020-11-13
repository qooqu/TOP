const removeFromArray = function (arr, ...rms) {
    let newArr = [];
    arr.forEach(item => {
        rms.includes(item) ? newArr : newArr.push(item);
    })
    return newArr;
}

module.exports = removeFromArray