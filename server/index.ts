import path from 'path';

import {Server} from 'socket.io';

import {createServer} from './createServer';
import * as api from './api';

createServer(path.resolve(__dirname, './public'), 80);

const io = new Server(3000);

io.on('connection', socket => {
    Object.values(api).forEach(handler => {
        handler(socket, io);
    });
});
