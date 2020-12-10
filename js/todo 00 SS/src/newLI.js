import state from './index';
import handleClick from './handleClick'

const newLI = (itemType, itemTitle, ...btns) => {
    let li = document.createElement('li');
    let liTxt = document.createElement('span');
    liTxt.textContent = itemTitle;
    li.appendChild(liTxt);

    btns.forEach(btn => {
        let liBtn = document.createElement('button');
        liBtn.textContent = btn;
        let id = itemType == 'project' ? `${itemType}-${btn}-${itemTitle}` : `${itemType}-${btn}-${state.currentProject.title}-${itemTitle}`;
        liBtn.setAttribute('id', id);
        liBtn.addEventListener('click', handleClick);
        li.appendChild(liBtn);
    });

    return li;
}

export default newLI