import React from 'react';
import {useSelector} from 'react-redux';

import {Wheel as WheelBase} from '~/components/Wheel';
import {Arrow} from '~/components/Arrow';
import {WheelCover} from '~/components/WheelCover';
import url from '~/images/wheel-background.svg';
import type {State} from '~/store';

import css from './style.module.css';

export const Wheel = () => {
    const angle = useSelector((state: State) => state.angle);

    return (
        <div className={css.wrapper}>
            <img className={css.background} src={url} alt="" />

            <WheelBase />

            <div className={css.cover}>
                <WheelCover />
            </div>

            <Arrow angle={angle} className={css.arrow} />
        </div>
    );
};
