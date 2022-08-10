import React from 'react';
import {useSelector} from 'react-redux';

import {socket} from 'client/utils/socket';
import type {State} from 'client/store';

export const SpinButton = () => {
    const status = useSelector((state: State) => state.wheel.status);
    const isDisabled = status === 'pending';

    const onClick = () => {
        socket.emit('wheel');
        socket.emit('card');
        socket.emit('host', socket.id);
    };

    return (
        <button
            disabled={isDisabled}
            type="button"
            onClick={onClick}
        >
            Крутить
        </button>
    );
};
