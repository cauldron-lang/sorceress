import getProjectDirectoryTree from "./util/get_project_directory_tree.js";

const updateCount = (event, present) => {
    present({ addToCount: event.value });
};

const boot = (event, present) => {
    present({ boot: true });
};

const editorFocus = (event, present) => {
    present({ focus: 'editor' });
};

const keyPress = (event, present) => {
    present({ keyPressed: event.name });
};

const openProject = (event, present) => {
    present({ projectDirectory: getProjectDirectoryTree(event.projectDirectory) });
};

const focusBuffer = (event, present) => {
    present({ focusedBufferId: event.bufferId });
};

const intent = {
    UPDATE_COUNT: updateCount,
    BOOT: boot,
    EDITOR_FOCUS: editorFocus,
    KEY_PRESS: keyPress,
    OPEN_PROJECT: openProject,
    FOCUS_BUFFER: focusBuffer,
};

export const act = (event, present) => {
    intent[event.key](event, present);
};