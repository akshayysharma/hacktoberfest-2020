const conf = require('./conf');
const url = require('url');
const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');

let main_window = null;

const menu_template = [
    {
        role : 'reload',
        accelerator : 'f5'
    },
    {
        label : 'devtools',
        accelerator : 'f12',
        click(item, focused_window){
            focused_window.toggleDevTools();
        }
    }
];

app.on('ready', () => {

    main_window = new BrowserWindow({
        width : conf.window.width,
        height : conf.window.height
    });

    let url_format = url.format({
        pathname : path.join(__dirname, conf.game.path, 'game.html'),
        protocol : 'file:',
        slashes : true
    });

    main_window.loadURL(url_format);

    const main_menu = Menu.buildFromTemplate(menu_template);
    Menu.setApplicationMenu(main_menu);
    
});