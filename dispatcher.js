const { present, initialModel } = require("./model");
const { act } = require("./action");
const { state } = require("./state");
const { render } = require("./view");

const createDispatch = (window) => {
    const model = initialModel();

    const runDispatch = (event) => {
        const runPresent = (proposal) => {
            const runState = (oldModel, newModel) => {
                const runRender = (stateRepresentation) => {
                    render(window, stateRepresentation);
                };

                state(oldModel, newModel, runDispatch, runRender);
            };

            present(model, runState, proposal);
        };

        act(event, runPresent);
    };

    return runDispatch;
};

module.exports = {
    createDispatch
};