const initMenus = () => {

    const btns = Array.from(document.querySelectorAll("button"));
    console.log(btns);

    btns.forEach(btn => btn.addEventListener('click', handleClick));

    function handleClick(e) {
        e.preventDefault();
        let menuItems = e.target.nextElementSibling;
        e.target.textContent = e.target.textContent == '///' ? 'X' : '///';
        menuItems.style.height = menuItems.style.height == '100px' ? '0px' : '100px';
        menuItems.style.width = menuItems.style.width == '70px' ? '0px' : '70px';
    }

}

export default initMenus