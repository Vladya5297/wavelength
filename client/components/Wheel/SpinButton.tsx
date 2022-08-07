import React from 'react';
import {socket} from 'client/utils/socket';

import css from './style.module.css';

const spin = () => {
    // @ts-ignore
    const wheel = window.wheel;
    wheel.stopAnimation();
    wheel.rotationAngle = 0;
    wheel.draw();

    // от 5 до 18
    const stopSegment = 5 + Math.round(Math.random() * 13);
    const stopAngle = wheel.getRandomForSegment(stopSegment);
    wheel.animation.stopAngle = stopAngle;

    wheel.startAnimation();
};

export const SpinButton = () => {
    const onClick = () => {
        spin();
        socket.emit('card');
        socket.emit('host', socket.id);
    };

    return <button className={css.spinButton} type="button" onClick={onClick}>Крутить</button>;
};
