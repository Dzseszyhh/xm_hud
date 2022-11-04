fx_version 'cerulean'
game 'gta5'

author 'Jacee'
description 'xm_hud - Jacee'
version '0.0.1'

client_scripts {
    'client.lua',
}

server_scripts {
    'server.lua',
    '@mysql-async/lib/MySQL.lua',
}

ui_page 'ui/index.html'

files {
    'ui/index.html',
    'ui/script.js',
    'ui/style.css',     
}