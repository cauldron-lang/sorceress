const {UPDATE_COUNT} = require("./event");

const nextActionPredicate = (stateRepresentation, dispatch) => {
    if (stateRepresentation.count === 5) {
        dispatch(UPDATE_COUNT(stateRepresentation.count > stateRepresentation.previousCount ? 1 : -1));
        return true;
    }

    return false;
};

const state = (oldModel, model, dispatch, render) => {
    const stateRepresentation = {
        previousCount: oldModel.count,
        count: model.count,
    };

    if (!nextActionPredicate(stateRepresentation, dispatch)) {
        render(stateRepresentation);
    }
};

module.exports = {
    state,
};