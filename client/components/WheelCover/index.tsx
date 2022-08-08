import React from 'react';
import {useGame} from 'client/utils/useGame';

import {ArrowSlider} from '../ArrowSlider';

import css from './style.module.css';

export const WheelCover = () => {
    const {isRunning, isHost} = useGame();
    const isWheelHidden = isRunning && !isHost;

    return (
        <div className={css.wrapper}>
            <div className={css.wheelCoverTop} style={{backgroundColor: isWheelHidden ? 'blue' : 'unset'}} />

            <div className={css.wheelCoverBottom}>
                {!isHost ? <ArrowSlider /> : null}
            </div>
        </div>
    );
};
