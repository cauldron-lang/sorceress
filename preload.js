const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('sorceress', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
});