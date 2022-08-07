import React from 'react';
import {socket} from 'client/utils/socket';

import css from './style.module.css';

export const OpenButton = () => {
    const onClick = () => {
        socket.emit('host', null);
    };

    return <button className={css.openButton} type="button" onClick={onClick}>Открыть</button>;
};
