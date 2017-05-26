const path = require('path');
const electron = require('electron');
const TimerTray = require('./app/timer_tray');
const MainWindow = require('./app/main_window');

const { app, BrowserWindow, Tray } = electron;

let mainWindow;

app.on('ready', () => {
  app.dock.hide();
  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
  

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'list.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  tray = new TimerTray(iconPath, mainWindow);

});
