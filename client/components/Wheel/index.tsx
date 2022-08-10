import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {socket} from 'client/utils/socket';
import {wheelSlice} from 'client/store/wheel';

import {makeSegments} from './utils';

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

    const spinCallback = () => {
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
            pointerAngle: 0,
            numSegments: 36,
            segments,
            animation:
            {
                type: 'spinToStop',
                duration: 2,
                spins: 1,
                direction: 'clockwise',
                callbackFinished: spinCallback,
            },
        });
    }, []);

    useEffect(() => {
        socket.on('wheel', spin);

        return () => {
            socket.off('wheel', spin);
        };
    }, []);

    return (
        <canvas id="wheel" width="500" height="500" />
    );
};
