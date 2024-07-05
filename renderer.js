import Layout from "./components/layout.js";
import { KEY_PRESS } from "./event.js";

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main')
    let hasRendered = false;
    const layout = new Layout(window.sorceress.dispatch);

    window.sorceress.rendererReady();
    window.sorceress.onRender((stateRepresentation) => {
        if (hasRendered) {
            layout.detachEventListeners();
        } else {
            window.addEventListener('keydown', (event) => {
                window.sorceress.dispatch(KEY_PRESS(event.key))
            });
        }

        main.innerHTML = layout.render(stateRepresentation);
        hasRendered = true;

        layout.attachEventListeners();
    });
});