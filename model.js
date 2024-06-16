const updateModel = (model, proposal) => {
    if (proposal.addToCount) {
        model.count += proposal.addToCount;
    }
};

const persist = (_model) => {};

const clone = (model) => {
    return { ...model };
};

const present = (model, state, proposal) => {
    const oldModel = clone(model);

    updateModel(model, proposal);
    state(oldModel, model);
    persist(model);
};

const initialModel = () => ({
    count: 0,
});

module.exports = {
    present,
    initialModel,
};