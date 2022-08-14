import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {socket} from 'client/utils/socket';
import {wheelSlice} from 'client/store/wheel';
import {useBreakpoint} from 'client/utils/breakpoints';

import {useWheel} from './utils';

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

    const size = useBreakpoint({'-s': 300, 's-l': 400, 'l-': 500, fallback: 300});

    useWheel([size]);

    return (
        <canvas id="wheel" width={size} height={size} />
    );
};
