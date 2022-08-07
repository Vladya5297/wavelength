import {io} from 'socket.io-client';
import {store} from 'client/store';
import {hostSlice} from 'client/store/host';
import {cardSlice} from 'client/store/card';
import {angleSlice} from 'client/store/angle';

const url = new URL(window.location.href);
url.port = '3000';

export const socket = io(url.toString(), {transports: ['websocket']});

socket.on('host', (value: string | null) => {
    store.dispatch(hostSlice.actions.setup(value));
});

socket.on('card', (value: string[]) => {
    store.dispatch(cardSlice.actions.setup(value));
});

socket.on('angle', (value: number) => {
    store.dispatch(angleSlice.actions.setup(value));
});
