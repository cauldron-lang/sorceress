import { EDITOR_FOCUS } from "../event.js";
import CauldronIcon from "./icons/cauldron_icon.js";

export default class EditorPane {
    id = "editor-pane"

    constructor(dispatch) {
        this.dispatch = dispatch;
        this.cauldronIcon = new CauldronIcon();
    }

    renderCursor(stateRepresentation) {
        return stateRepresentation.focus === 'editor' ? `<span class="blink">|</span>` : '';
    }

    renderTabIcon(stateRepresentation) {
        return this.cauldronIcon.render(stateRepresentation);
    }

    renderTabLabel({ label, active }) {
        return `<span class="tab-label ${active ? 'tab-label-active' : ''}">${label}</span>`;
    }

    renderTabs(stateRepresentation) {
        const tabIcon = this.renderTabIcon(stateRepresentation);

        return `
            <div class="tab-nav">
                <div class="tab-item">${tabIcon}${this.renderTabLabel({ label: "main", active: true })}</div>
                <div class="tab-item">${tabIcon}${this.renderTabLabel({ label: "worker", active: false })}</div>
            </div> 
        `;
    }

    renderBuffer(stateRepresentation) {
        return `
            <span>${stateRepresentation.buffer}</span>
        `;
    }

    render(stateRepresentation) {
        return `
            <div id="${this.id}" class="pane pane-dark">
                ${this.renderTabs(stateRepresentation)}
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
    }

    detachEventListeners() {
        document.getElementById(this.id).removeEventListener('click', this.onClick.bind(this));
    }
}
