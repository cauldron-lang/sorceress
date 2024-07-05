export const render = (window, stateRepresentation) => {
    window.webContents.send('render', stateRepresentation);
};