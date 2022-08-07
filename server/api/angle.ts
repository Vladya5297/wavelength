import type {Server, Socket} from 'socket.io';

let angle = 0;

export const angleApi = (socket: Socket, server: Server) => {
    socket.emit('angle', angle);

    socket.on('angle', (value: number) => {
        angle = value;
        server.emit('angle', angle);
    });
};
