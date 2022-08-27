import {io} from 'socket.io-client';

import {store} from '~/store';
import {hostSlice} from '~/store/host';
import {cardSlice} from '~/store/card';
import {angleSlice} from '~/store/angle';
import {roomSlice} from '~/store/room';

export const socket = io();

socket.on('host', (value: string | null) => {
    store.dispatch(hostSlice.actions.setup(value));
});

socket.on('card', (value: string[]) => {
    store.dispatch(cardSlice.actions.setup(value));
});

let tid: ReturnType<typeof setTimeout>;

socket.on('angle', (value: number) => {
    clearTimeout(tid);
    store.dispatch(angleSlice.actions.setPending());
    tid = setTimeout(() => {
        store.dispatch(angleSlice.actions.setDone());
    }, 300);

    store.dispatch(angleSlice.actions.setup(value));
});

socket.on('disconnect', () => {
    store.dispatch(roomSlice.actions.setup(null));
});
