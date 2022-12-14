import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {roomSlice} from '~/store/room';
import {socket} from '~/utils/socket';

import css from './style.module.css';

export const Enter = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const onClick = () => {
        socket.emit('room', value);
        dispatch(roomSlice.actions.setup(value));
    };

    return (
        <form className={css.wrapper} onSubmit={onClick}>
            <h2>Введите название комнаты</h2>
            <input type="text" value={value} onChange={onChange} maxLength={10} />
            <button
                disabled={!value.length}
                type="submit"
            >
                Подтведить
            </button>
        </form>
    );
};
