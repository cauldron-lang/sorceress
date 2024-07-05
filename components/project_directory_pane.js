import CauldronIcon from "./icons/cauldron_icon.js";

export default class ProjectDirectoryPane {

    constructor(dispatch) {
        this.dispatch = dispatch;
        this.cauldronIcon = new CauldronIcon();
    }

    renderFileIcon(file) {
        return this.cauldronIcon.render(file);
    }

    renderFolderIcon(_folder) {
        return `
            <svg class="icon icon-folder" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
            </svg>
        `;
    }

    renderFile(file) {
        return `
            <div class="project-directory-file">
                ${this.renderFileIcon(file)}
                <span>${file.name}</span>
            </div>
        `;
    }

    renderFolder(folder) {
        return `
            <div class="project-directory-folder">
                ${this.renderFolderIcon(folder)}
                <span>${folder.name}</span>
                <div class="project-directory-nodes">${folder.nodes.map((node) => this.renderNode(node))}</div>
            </div>
        `;
    }

    renderNode(node) {
        return node.isFolder ? this.renderFolder(node) : this.renderFile(node);
    }

    render(stateRepresentation) {
        return `
            <div class="pane pane-light">${this.renderNode(stateRepresentation.projectDirectory)}</div>
        `;
    }
}