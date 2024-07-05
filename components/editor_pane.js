import { EDITOR_FOCUS } from "../event.js";
import TabBar from "./tab_bar.js";

export default class EditorPane {
    id = "editor-pane"

    constructor(dispatch) {
        this.dispatch = dispatch;
        this.tabBar = new TabBar(dispatch);
    }

    renderCursor(stateRepresentation) {
        return stateRepresentation.focus === 'editor' ? `<span class="blink">|</span>` : '';
    }

    renderBuffer(stateRepresentation) {
        return `
            <span>${stateRepresentation.editorPaneContents}</span>
        `;
    }

    renderTabBar(stateRepresentation) {
        return this.tabBar.render(stateRepresentation);
    }

    render(stateRepresentation) {
        return `
            <div id="${this.id}" class="pane pane-dark">
                ${this.renderTabBar(stateRepresentation)}
                ${this.renderBuffer(stateRepresentation)}
                ${this.renderCursor(stateRepresentation)}
            </div>
        `;
    }

    onClick() {
        this.dispatch(EDITOR_FOCUS());
    }

    attachEventListeners() {
        document.getElementById(this.id).addEventListener('click', this.onClick.bind(this));
        this.tabBar.attachEventListeners();
    }

    detachEventListeners() {
        document.getElementById(this.id).removeEventListener('click', this.onClick.bind(this));
        this.tabBar.detachEventListeners();
    }
}
