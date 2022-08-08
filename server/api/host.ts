import type {Server, Socket} from 'socket.io';

import {getSocketRoom, subscribeClearState} from './utils';

const state: Map<string, string | null> = new Map();

export const hostApi = (socket: Socket, server: Server) => {
    const room = getSocketRoom(socket);
    const initialValue = state.get(room) ?? null;

    socket.emit('host', initialValue);

    socket.on('host', (value: string | null) => {
        state.set(room, value);

        server.to(room).emit('host', value);
    });

    socket.on('disconnect', () => {
        const host = state.get(room);
        if (socket.id === host) {
            state.set(room, null);

            server.to(room).emit('host', null);
        }
    });

    subscribeClearState(socket, server, state);
};
