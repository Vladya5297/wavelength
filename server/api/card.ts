import {faker} from '@faker-js/faker';
import type {Server, Socket} from 'socket.io';

import cards from '../database.json';

let card: string[] = [];

export const cardApi = (socket: Socket, server: Server) => {
    socket.emit('card', card);

    socket.on('card', () => {
        const index = faker.datatype.number({min: 0, max: cards.length - 1});
        card = cards[index];
        server.emit('card', card);
    });
};
