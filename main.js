const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('node:path');
const { createDispatch } = require('./dispatcher');
const { UPDATE_COUNT } = require('./event');

const createMenu = (mainWindow, dispatch) => Menu.buildFromTemplate([
    {
        label: app.name,
        submenu: [
            {
                click: () => dispatch(UPDATE_COUNT(1)),
                label: 'Increment'
            },
            {
                click: () => dispatch(UPDATE_COUNT(-1)),
                label: 'Decrement'
            }
        ]
    }

]);

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    const dispatch = createDispatch(win);
    const menu = createMenu(win, dispatch);

    Menu.setApplicationMenu(menu);
    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender;
        const win = BrowserWindow.fromWebContents(webContents);

        win.setTitle(title);
    });

    win.loadFile('index.html');
    win.webContents.openDevTools()
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