import React from 'react';
import {useSelector} from 'react-redux';
import cn from 'classnames';

import {Arrow} from './components/Arrow';
import {OpenButton} from './components/OpenButton';
import {SpinButton} from './components/SpinButton';
import {Wheel} from './components/Wheel';
import {WheelCover} from './components/WheelCover';
import {useGame} from './utils/useGame';
import type {State} from './store';

import css from './style.module.css';

const Button = () => {
    const {isRunning, isHost} = useGame();

    if (isRunning && isHost) {
        return <OpenButton />;
    }

    if (isRunning) {
        return null;
    }

    return <SpinButton />;
};

export const App = () => {
    const [leftCard, rightCard] = useSelector((state: State) => state.card);

    return (
        <div className={css.wrapper}>
            <div className={css.wheelWrapper}>
                <Wheel />
                <div className={css.cover}>
                    <WheelCover />
                </div>
                <div className={css.arrow}>
                    <Arrow />
                </div>

                {leftCard ? <div className={cn(css.card, css.leftCard)}>{leftCard}</div> : null}
                {rightCard ? <div className={cn(css.card, css.rightCard)}>{rightCard}</div> : null}
            </div>

            <div className={css.buttonWrapper}>
                <Button />
            </div>
        </div>
    );
};
