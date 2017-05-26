const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(url) {
    super({
      titleBarStyle: 'hidden',
      height: 550,
      width: 350,
      show: false,
      webPreferences: { backgroundThrottling: false }
    });
    this.loadURL(url);
    this.on('blur', this.onBlur.bind(this));
  }

  onBlur() {
    this.hide();
  }
}

module.exports = MainWindow;
