import CauldronIcon from "./icons/cauldron_icon.js";
import {FOCUS_BUFFER} from "../event.js";

export default class TabBar {
    id = "tab-bar"

    constructor(dispatch) {
        this.dispatch = dispatch;
        this.cauldronIcon = new CauldronIcon();
    }

    renderTabIcon() {
        return this.cauldronIcon.render();
    }

    renderTabLabel({ label, active }) {
        return `<span class="tab-label ${active ? 'tab-label-active' : ''}">${label}</span>`;
    }

    renderTab(tab) {
        return `
            <div data-buffer-id="${tab.bufferId}" class="tab-item">
                ${this.renderTabIcon()}${this.renderTabLabel(tab)}
            </div>
        `;
    }

    render(stateRepresentation) {
        return `
            <div id="${this.id}" class="tab-nav">
                ${stateRepresentation.tabs.map((tab) => this.renderTab(tab)).join('')}
            </div> 
        `;
    }

    onClick(event) {
        const clickedTab = event.target.closest(".tab-item");

        if (clickedTab) {
            this.dispatch(FOCUS_BUFFER(clickedTab.dataset.bufferId))
        }
    }

    attachEventListeners() {
        document.getElementById(this.id).addEventListener('click', this.onClick.bind(this));
    }

    detachEventListeners() {
        document.getElementById(this.id).removeEventListener('click', this.onClick.bind(this));
    }
}