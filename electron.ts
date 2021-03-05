import {app, BrowserWindow} from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';

// gc가 일어나지 않도록 .. ?
let main_window : BrowserWindow

const createWindow = () => {
    let win = new BrowserWindow({
        width : 800,
        height : 600,
        webPreferences : {
            nodeIntegration : true
        }
    });

    win.loadFile('index.html');
}

app.on('ready', createWindow);