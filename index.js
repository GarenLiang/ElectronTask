const path = require('path');
const electron = require('electron');

const { app, BrowserWindow, Tray } = electron;

let mainWindow;
let tray;
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    height: 550,
    width: 350,
    show: false
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'list.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  tray = new Tray(iconPath);
  tray.on('click', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  });
});
