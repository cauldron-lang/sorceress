import createBuffer from "./util/create_buffer.js";

const printableKeys = /^[a-zA-Z0-9_\s:=\[\]{}%+\-!"'<>~]$/;

const updateModel = (model, proposal) => {
    if (proposal.addToCount) {
        model.count += proposal.addToCount;
    }

    if (proposal.keyPressed && model.focus === "editor") {
        if (proposal.keyPressed === "Backspace") {
            model.activeBuffer.contents = model.activeBuffer.contents.slice(0, -1);
        }

        if (printableKeys.test(proposal.keyPressed)) {
            model.activeBuffer.contents += proposal.keyPressed;
        }
    }

    if (proposal.focus) {
        model.focus = proposal.focus;
    }

    if (proposal.boot) {
        model.isRunning = true;
    }

    if (proposal.projectDirectory) {
        model.projectDirectory = proposal.projectDirectory;
    }

    if (proposal.focusedBufferId) {
        model.activeBuffer = model.buffers.find((buffer) => buffer.id === proposal.focusedBufferId) ?? model.activeBuffer;
    }
};

const persist = (_model) => {};

const clone = (model) => {
    return { ...model };
};

const activeBuffer = createBuffer();

export const present = (model, state, proposal) => {
    const oldModel = clone(model);

    updateModel(model, proposal);
    state(oldModel, model);
    persist(model);
};

export const initialModel = () => ({
    isRunning: false,
    count: 0,
    focus: null, // 'editor' | null
    buffers: [activeBuffer, createBuffer()],
    activeBuffer,
    projectDirectory: null,
});
