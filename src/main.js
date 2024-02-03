
const { app, BrowserWindow } = require('electron');
const path = require('path');


app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile(path.join(__dirname,'index.html'));
   
});




