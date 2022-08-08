import type {Server, Socket} from 'socket.io';

import {getSocketRoom} from './utils';

const state: Map<string, number> = new Map();

export const wheelApi = (socket: Socket, server: Server) => {
    const room = getSocketRoom(socket);
    const initialValue = state.get(room) ?? -25;

    socket.emit('wheel', initialValue);

    socket.on('wheel', (value: number) => {
        state.set(room, value);

        server.to(room).emit('wheel', value);
    });
};
