import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {roomSlice} from 'client/store/room';
import {socket} from 'client/utils/socket';

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
        <div className={css.wrapper}>
            <h2>Введите название комнаты</h2>
            <input type="text" value={value} onChange={onChange} />
            <button
                disabled={!value.length}
                onClick={onClick}
                type="button"
            >
                Подтведить
            </button>
        </div>
    );
};
