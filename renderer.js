const setButton = document.getElementById('btn');
const titleInput = document.getElementById('title');

setButton.addEventListener('click', () => {
    const title = titleInput.value;
    window.sorceress.setTitle(title);
});

const counter = document.getElementById('counter')

window.sorceress.onUpdateCounter((value) => {
    const oldValue = Number(counter.innerText)
    const newValue = oldValue + value

    counter.innerText = newValue.toString()
    window.sorceress.counterValue(newValue)
})