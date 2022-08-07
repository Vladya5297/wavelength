import React from 'react';
import {faker} from '@faker-js/faker';

import {socket} from 'client/utils/socket';

import css from './style.module.css';

const spin = () => {
    const wheel = window.wheel;
    wheel.stopAnimation();
    wheel.rotationAngle = 0;
    wheel.draw();

    const stopSegment = faker.datatype.number({min: 0, max: 36});
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
