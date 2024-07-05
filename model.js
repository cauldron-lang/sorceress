const printableKeys = /^[a-zA-Z0-9_\s:=\[\]{}%+\-!"'<>~]$/;

const updateModel = (model, proposal) => {
    if (proposal.addToCount) {
        model.count += proposal.addToCount;
    }

    if (proposal.keyPressed && model.focus === "editor") {
        if (proposal.keyPressed === "Backspace") {
            model.buffer = model.buffer.slice(0, -1);
        }

        if (printableKeys.test(proposal.keyPressed)) {
            model.buffer += proposal.keyPressed;
        }
    }

    if (proposal.focus) {
        model.focus = proposal.focus;
    }

    if (proposal.boot) {
        // TODO: once booting is complete then open the project
    }
};

const persist = (_model) => {};

const clone = (model) => {
    return { ...model };
};

export const present = (model, state, proposal) => {
    const oldModel = clone(model);

    updateModel(model, proposal);
    state(oldModel, model);
    persist(model);
};

export const initialModel = () => ({
    count: 0,
    focus: null, // 'editor' | null
    buffer: '',
});