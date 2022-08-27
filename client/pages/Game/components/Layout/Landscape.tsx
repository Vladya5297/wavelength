import React from 'react';

import {Wheel} from '../Wheel';
import {Button} from '../Button';
import {Card} from '../Card';
import {Slider} from '../Slider';
import {Header} from '../Header';

import landscape from './landscape.module.css';

type Props = {
    cards: string[];
};

export const Landscape = ({cards}: Props) => {
    const [leftCard, rightCard] = cards;

    return (
        <div className={landscape.wrapper}>
            <div className={landscape.headerWrapper}>
                <Header />
            </div>

            <div className={landscape.wheelWrapper}>
                <Wheel />

                <div className={landscape.cardsWrapper}>
                    {leftCard && <Card text={leftCard} className={landscape.leftCard} />}

                    <div className={landscape.sliderWrapper}>
                        <Slider />
                    </div>

                    {rightCard && <Card text={rightCard} className={landscape.rightCard} />}
                </div>
            </div>

            <div className={landscape.buttonWrapper}>
                <Button />
            </div>
        </div>
    );
};
