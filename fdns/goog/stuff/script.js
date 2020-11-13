let searchTextContainer = document.getElementById('search-text-container');
let searchTextBox = document.getElementById('search-text-box');

function addShadow() {
    searchTextContainer.classList.add('addShadowWithJS')
}

function removeShadow() {
    searchTextContainer.classList.remove('addShadowWithJS')
}

searchTextBox.addEventListener("click", addShadow);
searchTextBox.addEventListener("focusout", removeShadow);