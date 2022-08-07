import {io} from 'socket.io-client';

const url = new URL(window.location.href);
url.port = '3000';

export const socket = io(url.toString(), {transports: ['websocket']});
