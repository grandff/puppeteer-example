const {app, BrowserWindow} = require('electron')
const path = require('path')
const electronLocalshortcut = require('electron-localshortcut');

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {        
        preload : path.join(__dirname, 'preload.js')
    },
    resizable : false
  })

  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools();

  electronLocalshortcut.register(mainWindow, 'F5', () => {
      console.log('F% is pressed')
      mainWindow.reload();
  });
}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

