import React from 'react';

import {Wheel} from '../Wheel';
import {Button} from '../Button';
import {Card} from '../Card';
import {Slider} from '../Slider';
import {Header} from '../Header';

import css from './portrait.module.css';

type Props = {
    cards: string[];
};

export const Portrait = ({cards}: Props) => {
    const [leftCard, rightCard] = cards;

    return (
        <div className={css.wrapper}>
            <div className={css.headerWrapper}>
                <Header />
            </div>

            <Wheel />

            <div className={css.controls}>
                <div className={css.cardsWrapper}>
                    {leftCard && <Card text={leftCard} className={css.leftCard} />}

                    {rightCard && <Card text={rightCard} className={css.rightCard} />}
                </div>

                <div className={css.sliderWrapper}>
                    <Slider />
                </div>

                <div className={css.buttonWrapper}>
                    <Button />
                </div>
            </div>
        </div>
    );
};
