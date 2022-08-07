import type {Socket} from 'socket.io';

let wheel = -25;

export const wheelApi = (socket: Socket) => {
    socket.emit('wheel', wheel);

    socket.on('wheel', (value: number) => {
        wheel = value;
        socket.broadcast.emit('wheel', wheel);
    });
};
