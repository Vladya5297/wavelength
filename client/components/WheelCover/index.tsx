import React from 'react';
import type {ReactNode} from 'react';

import {useGame} from 'client/utils/useGame';
import url from 'client/images/wheel-cover.svg';

import css from './style.module.css';

type Props = {
    children: ReactNode;
};

export const WheelCover = ({children}: Props) => {
    const {isRunning, isHost} = useGame();
    const isWheelHidden = isRunning && !isHost;

    return (
        <div className={css.wrapper}>
            <div className={css.wheelCoverTop} style={{transform: `rotate(${isWheelHidden ? 360 : 180}deg)`}} />

            <img className={css.cover} src={url} alt="" />

            <div className={css.wheelCoverBottom}>
                {children}
            </div>
        </div>
    );
};
