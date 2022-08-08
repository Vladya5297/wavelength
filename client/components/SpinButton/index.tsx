import React from 'react';
import {faker} from '@faker-js/faker';
import {useDispatch} from 'react-redux';

import {socket} from 'client/utils/socket';
import {wheelSlice} from 'client/store/wheel';

import css from './style.module.css';

const spin = () => {
    const wheel = window.wheel;
    wheel.rotationAngle = 0;
    wheel.draw();

    const stopAngle = faker.datatype.number({min: 45, max: 190});
    wheel.animation.stopAngle = stopAngle;

    wheel.startAnimation();
};

export const SpinButton = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(wheelSlice.actions.setPending());
        spin();
        socket.emit('card');
        socket.emit('host', socket.id);
    };

    return <button className={css.spinButton} type="button" onClick={onClick}>Крутить</button>;
};
