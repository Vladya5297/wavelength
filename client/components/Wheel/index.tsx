import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {socket} from 'client/utils/socket';
import {wheelSlice} from 'client/store/wheel';

import {useWheel} from './utils';
import css from './style.module.css';

export const Wheel = () => {
    const dispatch = useDispatch();

    const spin = (stopAngle: number) => {
        dispatch(wheelSlice.actions.setPending());

        const wheel = window.wheel;
        wheel.rotationAngle = 0;
        wheel.draw();

        wheel.animation.stopAngle = stopAngle;
        wheel.startAnimation();
    };

    useEffect(() => {
        const callback = (value: number) => {
            spin(value);
            wheelSlice.actions.setup(value);
        };

        socket.on('wheel', callback);

        return () => {socket.off('wheel', callback)};
    }, []);

    useWheel();

    return (
        <canvas id="wheel" className={css.wheel} width={500} height={500} />
    );
};
