const render = (window, stateRepresentation) => {
    window.webContents.send('render', stateRepresentation);
};

module.exports = {
    render,
};

