import EditorPane from "./editor_pane.js";
import ProjectDirectoryPane from "./project_directory_pane.js";

export default class Layout {
    constructor(dispatch) {
        this.editorPane = new EditorPane(dispatch);
        this.projectDirectoryPane = new ProjectDirectoryPane(dispatch);
    }

    renderMenuIcon() {
        return `
            <svg class="icon-menu" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <circle cx="12" cy="4" r="2"/>
                <circle cx="12" cy="12" r="2"/>
                <circle cx="12" cy="20" r="2"/>
            </svg> 
        `;
    }

    render(stateRepresentation) {
        return `
            <header>
                ${this.renderMenuIcon()}
            </header>
            <div class="container">
                ${this.projectDirectoryPane.render(stateRepresentation)}
                ${this.editorPane.render(stateRepresentation)}
            </div>
            <div class="pane-bottom"></div>
        `;
    }

    attachEventListeners() {
        this.editorPane.attachEventListeners();
    }

    detachEventListeners() {
        this.editorPane.detachEventListeners();
    }
}
