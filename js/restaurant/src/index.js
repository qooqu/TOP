import home from './components/home';
import about from './components/about';
import contact from './components/contact';

let container = document.getElementById('container');
let tabs = document.createElement('div');
let content = document.createElement('div');

let tabNames = ['home', 'about', 'contact'];
let contentArray = [home(), about(), contact()];

let handleClick = function (e) {

    let index = parseInt(e.target.dataset.index);
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(contentArray[index]);
}

tabNames.forEach((value, index) => {
    let btn = document.createElement('button');
    btn.setAttribute('data-index', index);
    btn.addEventListener('click', handleClick);
    btn.textContent = value;
    tabs.appendChild(btn);
})

container.appendChild(tabs);
content.appendChild(home());
container.appendChild(content);
