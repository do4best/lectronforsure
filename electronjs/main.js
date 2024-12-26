import { app,BrowserWindow } from "electron";
let window = null;
const createWindow = () => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
window.loadFile("index.html");}
app.whenReady().then(createWindow);