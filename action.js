const updateCount = (event, present) => {
    const value = event.value;
    const proposal = {
        addToCount: value,
    };

    present(proposal);
};

const boot = (event, present) => {
    const proposal = { boot: true };

    present(proposal);
};

const intent = {
    UPDATE_COUNT: updateCount,
    BOOT: boot
};

const act = (event, present) => {
    intent[event.key](event, present);
};

module.exports = {
    act
};