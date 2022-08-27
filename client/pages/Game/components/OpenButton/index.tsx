import React from 'react';
import {useSelector} from 'react-redux';

import {socket} from '~/utils/socket';
import type {State} from '~/store';

export const OpenButton = () => {
    const isDisabled = useSelector((state: State) => state.wheel.status === 'pending');

    const onClick = () => {
        socket.emit('host', null);
    };

    return (
        <button
            disabled={isDisabled}
            type="button"
            onClick={onClick}
        >
            Открыть
        </button>
    );
};
