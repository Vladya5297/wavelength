import type {Server, Socket} from 'socket.io';

import {getSocketRoom, subscribeClearState} from './utils';

const state: Map<string, number> = new Map();

export const angleApi = (socket: Socket, server: Server) => {
    const room = getSocketRoom(socket);
    const initialValue = state.get(room) ?? 0;

    socket.emit('angle', initialValue);

    socket.on('angle', (value: number) => {
        state.set(room, value);

        socket.to(room).emit('angle', value);
    });

    const clearCallback = () => {console.log('cleared angle for empty room', room)};
    subscribeClearState(socket, server, state, clearCallback);
};
