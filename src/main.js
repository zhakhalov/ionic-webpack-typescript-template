const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

global.__dirname = __dirname;

app.on('ready', () => {
  new BrowserWindow({
    width: 1280,
    height: 720
  }).loadURL(`file://${__dirname}/index.html`)
});

// app.on('browser-window-created', function (e, window) {
//   window.setMenu(null);
// });

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
