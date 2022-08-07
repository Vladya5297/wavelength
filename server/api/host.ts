import type {Server, Socket} from 'socket.io';

let host: string | null = null;

export const hostApi = (socket: Socket, server: Server) => {
    socket.emit('host', host);

    socket.on('host', (value: string | null) => {
        host = value;
        server.emit('host', host);
    });

    socket.on('disconnect', () => {
        if (socket.id === host) {
            host = null;
            server.emit('host', host);
        }
    });
};
