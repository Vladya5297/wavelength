import {faker} from '@faker-js/faker';
import type {Server, Socket} from 'socket.io';

import cards from '../database.json';

import {getSocketRoom, subscribeClearState} from './utils';

const state: Map<string, string[]> = new Map();

export const cardApi = (socket: Socket, server: Server) => {
    const room = getSocketRoom(socket);
    const initialValue = state.get(room) ?? [];

    socket.emit('card', initialValue);

    socket.on('card', () => {
        const index = faker.datatype.number({min: 0, max: cards.length - 1});
        const value = cards[index];
        state.set(room, value);

        server.to(room).emit('card', value);
    });

    subscribeClearState(socket, server, state);
};
