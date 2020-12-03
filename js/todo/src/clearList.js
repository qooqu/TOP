const clearList = (list) => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

export default clearList