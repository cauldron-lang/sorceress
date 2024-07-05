import { present, initialModel } from "./model.js";
import { act } from "./action.js";
import { state } from "./state.js";
import { render } from "./view.js";

export const createDispatch = (window) => {
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