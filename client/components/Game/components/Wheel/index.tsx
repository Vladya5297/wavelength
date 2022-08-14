import React from 'react';

import {Wheel as WheelBase} from 'client/components/Wheel';
import {Arrow} from 'client/components/Arrow';
import {WheelCover} from 'client/components/WheelCover';
import url from 'client/images/wheel-background.svg';

import css from './style.module.css';

export const Wheel = () => {
    return (
        <div className={css.wrapper}>
            <img className={css.background} src={url} alt="" />

            <WheelBase />

            <div className={css.cover}>
                <WheelCover />
            </div>

            <div className={css.arrow}>
                <Arrow />
            </div>
        </div>
    );
};
