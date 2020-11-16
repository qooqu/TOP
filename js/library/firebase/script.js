let firebaseConfig = {
    apiKey: "AIzaSyDjrpCrtwlfW9gjoHZMPNp9CGy6ZeLeOes",
    authDomain: "top-js-library-3d47f.firebaseapp.com",
    databaseURL: "https://top-js-library-3d47f.firebaseio.com",
    projectId: "top-js-library-3d47f",
    storageBucket: "top-js-library-3d47f.appspot.com",
    messagingSenderId: "882838332374",
    appId: "1:882838332374:web:baff8ecda9b496ac54fa77"
};
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

const bookList = document.getElementById('book-list');

let library = [];
let ids = [];

function getRealtimeUpdates() {
    db.collection('books').onSnapshot(docs => {
        library = [];
        ids = [];
        docs.forEach((doc) => {
            ids.push(doc.id);
            library.push(doc.data());
            console.log(`${doc.id} => ${doc.data()}`);
        });
        renderLibrary();
    })
}

getRealtimeUpdates();

function renderLibrary() {
    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }
    library.forEach((book, index) => {
        renderBook(book, index);
    })
}

function renderBook(book, index) {
    let li = document.createElement('li');
    let liTxt = document.createElement('span');
    let liBtnRead = document.createElement('button');
    let liBtnDel = document.createElement('button');
    liTxt.textContent = `${book.title ? book.title : '???'} by ${book.author ? book.author : '???'}, ${book.pages ? book.pages : '???'} pages, ${book.read ? 'have read' : 'not read yet'}`;
    liBtnRead.textContent = 'read';
    liBtnDel.textContent = 'remove';
    liBtnRead.setAttribute('data-id', ids[index]);
    liBtnDel.setAttribute('data-id', ids[index]);
    liBtnRead.addEventListener('click', liBtnReadHandleClick);
    liBtnDel.addEventListener('click', liBtnDelHandleClick);
    li.appendChild(liTxt);
    li.appendChild(liBtnRead);
    li.appendChild(liBtnDel);
    bookList.appendChild(li);
}

function liBtnReadHandleClick(e) {
    let id = e.target.dataset.id;
    let oldRead = library[ids.indexOf(id)].read;
    let newRead = !oldRead;
    db.collection('books').doc(id).update({
        read: newRead
    }).then(function () {
        console.log("Document successfully updated!");
    }).catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

function liBtnDelHandleClick(e) {
    let id = e.target.dataset.id;
    db.collection('books').doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

var form = document.getElementById("new-book");
form.addEventListener('submit', addBookToLibrary, true);

function addBookToLibrary(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let author = e.target.author.value;
    let pages = e.target.pages.value;
    db.collection('books').add({
        title,
        author,
        pages,
        read: true
    }).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function (error) {
        console.error("Error adding document: ", error);
    });
};
