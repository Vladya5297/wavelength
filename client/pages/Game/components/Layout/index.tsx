import React from 'react';
import {useSelector} from 'react-redux';

import type {State} from '~/store';

import {Wheel} from '../Wheel';
import {Button} from '../Button';
import {Card} from '../Card';
import {Slider} from '../Slider';

import portrait from './portrait.module.css';
import landscape from './landscape.module.css';

export const PortraitLayout = () => {
    const [leftCard, rightCard] = useSelector((state: State) => state.card);

    return (
        <>
            <div className={portrait.wrapper}>
                <Wheel />
            </div>

            <div className={portrait.controls}>
                <div className={portrait.cardsWrapper}>
                    {leftCard && <Card text={leftCard} className={portrait.leftCard} />}

                    {rightCard && <Card text={rightCard} className={portrait.rightCard} />}
                </div>

                <div className={portrait.sliderWrapper}>
                    <Slider />
                </div>

                <div className={portrait.buttonWrapper}>
                    <Button />
                </div>
            </div>
        </>
    );
};

export const LandscapeLayout = () => {
    const [leftCard, rightCard] = useSelector((state: State) => state.card);

    return (
        <div className={landscape.wrapper}>
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

            <Button />
        </div>
    );
};
