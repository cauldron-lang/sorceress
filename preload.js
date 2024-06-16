const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('sorceress', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    onUpdateCounter: (callback) => ipcRenderer.on('update-counter', (_event, value) => callback(value)),
    counterValue: (value) => ipcRenderer.send('counter-value', value)
});