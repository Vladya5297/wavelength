import React from 'react';
import {socket} from 'client/utils/socket';

import {useSelector} from 'react-redux';
import type {State} from 'client/store';

import css from './style.module.css';

export const OpenButton = () => {
    const status = useSelector((state: State) => state.wheel.status);
    const isDisabled = status === 'pending';

    const onClick = () => {
        socket.emit('host', null);
    };

    return (
        <button
            disabled={isDisabled}
            className={css.openButton}
            type="button"
            onClick={onClick}
        >
            Открыть
        </button>
    );
};
