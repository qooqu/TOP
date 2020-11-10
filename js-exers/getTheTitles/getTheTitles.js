const getTheTitles = function (books) {
    // let titles = [];
    // books.forEach(ele => {
    //     titles.push(ele.title);
    // });
    // return titles;
    return books.map(book => book.title);
}

module.exports = getTheTitles;
