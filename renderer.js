const setButton = document.getElementById('btn');
const titleInput = document.getElementById('title');
const main = document.getElementById('counter')

setButton.addEventListener('click', () => {
    const title = titleInput.value;
    window.sorceress.setTitle(title);
});

window.sorceress.onRender((stateRepresentation) => {
    main.innerHTML = stateRepresentation.count;
});