const { app , BrowserWindow } = require('electron')

function createWindow(){
    let win = new BrowserWindow({ width:1100 , height:620})
    win.loadFile('index.html')
    // win.webContents.openDevTools()
    win.on('closed',()=>{
        win = null
    })
}

app.on('ready',createWindow);

app.on('window-all-closed',()=>{
    if (process.platform !== 'darwin') {
        app.quit()
      }
})


app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })