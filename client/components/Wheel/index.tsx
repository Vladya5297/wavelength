import React, {useEffect} from 'react';

import {Arrow} from '../Arrow';

import {SpinButton} from './SpinButton';

import css from './style.module.css';

const targetSegments = [
    {text: '2', fillStyle: '#ec9221'},
    {text: '3', fillStyle: '#ef3238'},
    {text: '4', fillStyle: '#58809e'},
    {text: '3', fillStyle: '#ef3238'},
    {text: '2', fillStyle: '#ec9221'},
].map(props => ({...props, textFontFamily: 'sans-serif'}));

const segments = Array.from({length: 36});
segments.splice(0, 5, ...targetSegments);
segments.splice(18, 23, ...targetSegments);

export const Wheel = () => {
    useEffect(() => {
        const backgroundColor = '#dedbc7';
        // @ts-ignore
        window.wheel = new window.Winwheel({
            canvasId: 'wheel',
            textOrientation: 'vertical',
            textAlignment: 'outer',
            fillStyle: backgroundColor,
            strokeStyle: backgroundColor,
            lineWidth: 1,
            rotationAngle: -25,
            pointerAngle: 90,
            numSegments: 36,
            segments,
            animation:
            {
                type: 'spinToStop',
                duration: 2,
                spins: 2,
                direction: 'clockwise',
            },
        });
    }, []);

    return (
        <div className={css.wrapper}>
            <div className={css.wheelWrapper}>
                <canvas id="wheel" width="500" height="500" />
                <div className={css.wheelCover} />
                <div className={css.arrow}>
                    <Arrow />
                </div>
            </div>
            <SpinButton />
        </div>
    );
};
