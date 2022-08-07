import React from 'react';
import {useGame} from 'client/utils/useGame';

import {ArrowSlider} from '../ArrowSlider';

import css from './style.module.css';

export const WheelCover = () => {
    const {isRunning, isHost} = useGame();
    const isWheelHidden = isRunning && !isHost;

    return (
        <div className={css.wrapper}>
            {isWheelHidden ? <div className={css.wheelCoverTop} /> : null}

            <div className={css.wheelCoverBottom}>
                {!isHost ? <ArrowSlider /> : null}
            </div>
        </div>
    );
};
