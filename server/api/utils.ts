import type {Server, Socket} from 'socket.io';

export const getSocketRoom = (socket: Socket): string => {
    return Array.from(socket.rooms).filter(room => room !== socket.id)[0];
};

export const subscribeClearState = (
    socket: Socket,
    server: Server,
    state: Map<string, unknown>,
) => {
    const room = getSocketRoom(socket);

    socket.on('disconnect', async () => {
        const sockets = await server.in(room).fetchSockets();
        if (sockets.length === 0) {
            state.delete(room);
        }
    });
};
