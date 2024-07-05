import {OPEN_PROJECT, UPDATE_COUNT} from "./event.js";

const nextActionPredicate = (stateRepresentation, dispatch) => {
    if (stateRepresentation.count === 5) {
        dispatch(UPDATE_COUNT(stateRepresentation.count > stateRepresentation.previousCount ? 1 : -1));
        return true;
    }

    if (stateRepresentation.hasJustStarted) {
        dispatch(OPEN_PROJECT("/home/dennis/WebstormProjects/sorceress/examples/test_project")); // FIXME: path should come from persisted store
        return true;
    }

    return false;
};

export const state = (oldModel, model, dispatch, render) => {
    const stateRepresentation = {
        previousCount: oldModel.count,
        count: model.count,
        focus: model.focus,
        tabs: model.buffers.map((buffer) => ({
            bufferId: buffer.id,
            label: buffer.name,
            active: buffer === model.activeBuffer,
        })),
        editorPaneContents: model.activeBuffer.contents,
        hasJustStarted: oldModel.isRunning === false && model.isRunning === true,
        projectDirectory: model.projectDirectory,
    };

    if (!nextActionPredicate(stateRepresentation, dispatch)) {
        render(stateRepresentation);
    }
};