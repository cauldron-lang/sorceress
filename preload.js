const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('sorceress', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    onRender: (callback) => ipcRenderer.on('render', (_event, stateRepresentation) => callback(stateRepresentation)),
    rendererReady: () => ipcRenderer.send('rendererReady'),
});