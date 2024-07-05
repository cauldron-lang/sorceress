import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createDispatch } from './dispatcher.js';
import { BOOT } from './event.js';

// get the directory of the current module file
const __dirname = dirname(fileURLToPath(import.meta.url));

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    const dispatch = createDispatch(win);

    Menu.setApplicationMenu(null);
    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender;
        const win = BrowserWindow.fromWebContents(webContents);

        win.setTitle(title);
    });

    ipcMain.on('rendererReady', (_event) => {
        dispatch(BOOT());
    });

    ipcMain.on('dispatch', (_event, dispatchableEvent) => {
        dispatch(dispatchableEvent);
    });

    win.loadFile('index.html');
    win.webContents.openDevTools();
};

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.whenReady().then(() => {
    ipcMain.on('counter-value', (_event, value) => {
        console.log(value); // will print value to Node console
    });

    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});