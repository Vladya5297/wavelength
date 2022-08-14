import React from 'react';
import {useSelector} from 'react-redux';

import {Breakpoint} from 'client/utils/breakpoints';
import type {State} from 'client/store';

import {Wheel} from './components/Wheel';
import {Button} from './components/Button';
import {Card} from './components/Card';
import {Slider} from './components/Slider';
import css from './style.module.css';

export const Game = () => {
    const [leftCard, rightCard] = useSelector((state: State) => state.card);

    return (
        <div className={css.wrapper}>
            <div className={css.wheelWrapper}>
                <Wheel />

                <Breakpoint from="s">
                    <div className={css.cardsWrapper}>
                        {leftCard && <Card text={leftCard} className={css.leftCard} />}

                        <div className={css.sliderWrapper}>
                            <Slider />
                        </div>

                        {rightCard && <Card text={rightCard} className={css.rightCard} />}
                    </div>
                </Breakpoint>
            </div>

            <Breakpoint to="s">
                <div className={css.cardsWrapper}>
                    {leftCard && <Card text={leftCard} className={css.leftCard} />}
                    {rightCard && <Card text={rightCard} className={css.rightCard} />}
                </div>

                <div className={css.sliderWrapper}>
                    <Slider />
                </div>
            </Breakpoint>

            <Button />
        </div>
    );
};
