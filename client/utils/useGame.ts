import {useSelector} from 'react-redux';

import type {State} from '~/store';

import {socket} from './socket';

export const useGame = () => {
    const host = useSelector((state: State) => state.host);

    const isRunning = host !== null;
    const isHost = host === socket.id;

    return {isRunning, isHost};
};
