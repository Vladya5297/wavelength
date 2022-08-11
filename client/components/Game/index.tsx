import React from 'react';
import {useSelector} from 'react-redux';
import cn from 'classnames';

import url from 'client/images/wheel-background.svg';
import type {State} from 'client/store';

import {Arrow} from '../Arrow';
import {Wheel} from '../Wheel';
import {WheelCover} from '../WheelCover';

import {Button} from './Button';
import css from './style.module.css';

export const Game = () => {
    const [leftCard, rightCard] = useSelector((state: State) => state.card);

    return (
        <div className={css.wrapper}>
            <div className={css.wheelWrapper}>
                <img className={css.wheelBackground} src={url} alt="" />

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
