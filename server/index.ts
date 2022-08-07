import path from 'path';

import {Server} from 'socket.io';

import {createServer} from './createServer';
import cards from './database.json';

createServer(path.resolve(__dirname, './public'), 80);

const io = new Server(3000);

let angle = 0;
let wheel = -25;
let card: string[] = [];
let host: string | null = null;

io.on('connection', socket => {
    socket.emit('angle', angle);
    socket.emit('wheel', wheel);
    socket.emit('card', card);

    socket.on('angle', (value: number) => {
        angle = value;
        socket.broadcast.emit('angle', angle);
    });

    socket.on('wheel', (value: number) => {
        wheel = value;
        socket.broadcast.emit('wheel', wheel);
    });

    socket.on('card', () => {
        const index = Math.round(Math.random() * cards.length);
        card = cards[index];
        io.emit('card', card);
    });

    socket.on('host', (value: string | null) => {
        host = value;
        io.emit('host', host);
    });
});
