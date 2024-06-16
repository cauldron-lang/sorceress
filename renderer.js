const main = document.getElementById('main')

const editorPane = (stateRepresentation) => {
    return `<div class="pane pane-dark">Editor</div>`;
};

const layout = (stateRepresentation) => {
    return `
        <header></header>
        <div class="container">
            <div class="pane pane-light">Files</div>
            ${editorPane(stateRepresentation)}
            <div class="pane pane-light">Chat</div>
        </div>
        <div class="pane-bottom"></div>
    `;
};

document.addEventListener('DOMContentLoaded', () => {
    window.sorceress.rendererReady();
    window.sorceress.onRender((stateRepresentation) => {
        main.innerHTML = layout(stateRepresentation);
    });
});