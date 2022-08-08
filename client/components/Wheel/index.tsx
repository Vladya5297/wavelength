import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {socket} from 'client/utils/socket';
import {wheelSlice} from 'client/store/wheel';

import {makeSegments} from './utils';

export const Wheel = () => {
    const dispatch = useDispatch();

    const spinCallback = () => {
        socket.emit('wheel', window.wheel.getRotationPosition());
        dispatch(wheelSlice.actions.setDone());
    };

    useEffect(() => {
        const backgroundColor = '#dedbc7';
        const segments = makeSegments();

        window.wheel = new window.Winwheel({
            canvasId: 'wheel',
            textOrientation: 'vertical',
            textAlignment: 'outer',
            textMargin: 20,
            fillStyle: backgroundColor,
            strokeStyle: backgroundColor,
            lineWidth: 1,
            rotationAngle: -25,
            pointerAngle: 90,
            numSegments: 36,
            segments,
            animation:
            {
                type: 'spinToStop',
                duration: 2,
                spins: 2,
                direction: 'clockwise',
                callbackFinished: spinCallback,
            },
        });
    }, []);

    useEffect(() => {
        socket.on('wheel', (value: number) => {
            window.wheel.rotationAngle = value;
            window.wheel.draw();
        });
    }, []);

    return (
        <canvas id="wheel" width="500" height="500" />
    );
};
