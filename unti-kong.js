const { mac_addr } = require('./config.js');

const dash_button = require('node-dash-button');
const dash = dash_button(mac_addr, null, null, 'all');
const simplayer = require('simplayer');

console.log('Listening...');
dash.on('detected', () => {
    console.log('\nウ　ン　チ　ー　コ　ン　グ　っ　て　知　っ　て　る　ゥ　！　？\n');
    simplayer('resource/unti-kong.wav', e => {
        if (e) throw e;
    });
});
