const bookList = document.getElementById('book-list');

let library;

if (localStorage.library) {
    let libraryJSON = localStorage.library.replace(/},/g, '}},').split('},');
    library = libraryJSON.map(book => JSON.parse(book));
} else {
    library = [];
}

renderLibrary();

function renderLibrary() {
    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }
    library.forEach((book, index) => {
        renderBook(book, index);
    })
    libraryJSON = library.map(book => JSON.stringify(book));
    localStorage.setItem('library', libraryJSON);
}

function renderBook(book, index) {
    let li = document.createElement('li');
    let liTxt = document.createElement('span');
    let liBtnRead = document.createElement('button');
    let liBtnDel = document.createElement('button');
    liTxt.textContent = `${book.title ? book.title : '???'} by ${book.author ? book.author : '???'}, ${book.pages ? book.pages : '???'} pages, ${book.read ? 'have read' : 'not read yet'}`;
    liBtnRead.textContent = 'read';
    liBtnDel.textContent = 'remove';
    liBtnRead.setAttribute('data-index', index);
    liBtnDel.setAttribute('data-index', index);
    liBtnRead.addEventListener('click', liBtnReadHandleClick);
    liBtnDel.addEventListener('click', liBtnDelHandleClick);
    li.appendChild(liTxt);
    li.appendChild(liBtnRead);
    li.appendChild(liBtnDel);
    bookList.appendChild(li);
}

function liBtnReadHandleClick(e) {
    let index = e.target.dataset.index;
    let book = library[index];
    book.read = !book.read;
    renderLibrary();
}

function liBtnDelHandleClick(e) {
    let index = e.target.dataset.index;
    library.splice(index, 1);
    renderLibrary();
}

var form = document.getElementById("new-book");
form.addEventListener('submit', addBookToLibrary, true);

function addBookToLibrary(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let author = e.target.author.value;
    let pages = e.target.pages.value;
    let newBook = new Book(title, author, pages, null);
    library.push(newBook);
    renderLibrary();
};

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
