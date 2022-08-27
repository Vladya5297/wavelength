import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {roomSlice} from '~/store/room';
import {socket} from '~/utils/socket';
import type {State} from '~/store';

import css from './style.module.css';

export const Header = () => {
    const room = useSelector((state: State) => state.room);

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(roomSlice.actions.setup(null));
        socket.disconnect();
        socket.connect();
    };

    return (
        <div className={css.wrapper}>
            <span className={css.button} onClick={onClick}>{'< Назад'}</span>

            <span>{`Комната: ${room}`}</span>
        </div>
    );
};
