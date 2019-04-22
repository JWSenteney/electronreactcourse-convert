const electron = require("electron");
const { app, BrowserWindow } = electron;

let browserWindow;

app.on("ready", () => {
  browserWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: { backgroundThrottling: false }
  });
});
