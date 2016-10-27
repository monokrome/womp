const {app, BrowserWindow} = require('electron');


class WompDesktop {
  constructor() {
    this.window = null;

    app.on('ready', this.start.bind(this));
    app.on('activate', this.activated.bind(this));
    app.on('window-all-closed', this.onAllWindowsClosed.bind(this));
  }

  activated() {
    if (this.window !== null) return;
    createWindow();
  }

  onAllWindowsClosed() {
    if (process.platform == 'darwin') return;
    app.quit();
  }

  onWindowClosed() {
    this.win = null;
  }

  start() {
    this.window = new BrowserWindow({
      frame: false,
      fullscreen: false,
      resizable: false,
      width: 1024,
      height: 768,
      useContentSize: true,
    });

    this.window.setMenu(null);

    if (typeof process.env.ELECTRON_DEBUG !== 'undefined')
      this.window.webContents.openDevTools('docked');

    this.window.loadURL(`file://${__dirname}/../dist/index.html`);
    this.window.on('closed', this.onWindowClosed.bind(this));
  }
}


new WompDesktop;
