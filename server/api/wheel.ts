import {faker} from '@faker-js/faker';
import type {Server, Socket} from 'socket.io';

import {getSocketRoom, subscribeClearState} from './utils';

const state: Map<string, number> = new Map();

export const wheelApi = (socket: Socket, server: Server) => {
    const room = getSocketRoom(socket);
    const initialValue = state.get(room) ?? 25;

    socket.emit('wheel', initialValue);

    socket.on('wheel', () => {
        const value = faker.datatype.number({min: -45, max: 100});
        state.set(room, value);

        server.to(room).emit('wheel', value);
    });

    const clearCallback = () => {console.log('cleared wheel for empty room', room)};
    subscribeClearState(socket, server, state, clearCallback);
};
