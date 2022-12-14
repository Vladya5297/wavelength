import path from 'path';
import {createServer as createHttpServer} from 'http';

import {Server} from 'socket.io';

import {createServer} from './createServer';
import * as api from './api';

const app = createServer(path.resolve(__dirname, './public'));
const httpServer = createHttpServer(app);
const io = new Server(httpServer);

const port = process.env.PORT ?? 80;
httpServer.listen(port);
console.log(`listening at http://localhost:${port}`);

io.on('connection', socket => {
    console.log('user connected', socket.id);

    socket.on('room', (value: string) => {
        socket.join(value);
        console.log(`user ${socket.id} joined room`, value);

        Object.values(api).forEach(handler => {
            handler(socket, io);
        });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
    });
});
