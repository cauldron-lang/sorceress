import { UPDATE_COUNT } from "./event.js";

const nextActionPredicate = (stateRepresentation, dispatch) => {
    if (stateRepresentation.count === 5) {
        dispatch(UPDATE_COUNT(stateRepresentation.count > stateRepresentation.previousCount ? 1 : -1));
        return true;
    }

    return false;
};

export const state = (oldModel, model, dispatch, render) => {
    const stateRepresentation = {
        previousCount: oldModel.count,
        count: model.count,
        focus: model.focus,
        buffer: model.buffer,
        projectDirectory: {
            name: 'test_project',
            isFolder: true,
            nodes: [
                {
                    name: 'main.cld',
                    isFolder: false,
                }
            ]
        },
    };

    if (!nextActionPredicate(stateRepresentation, dispatch)) {
        render(stateRepresentation);
    }
};