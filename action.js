const updateCount = (event, present) => {
    const value = event.value;
    const proposal = {
        addToCount: value,
    };

    present(proposal);
};

const intent = {
    UPDATE_COUNT: updateCount,
};

const act = (event, present) => {
    intent[event.key](event, present);
};

module.exports = {
    act
};