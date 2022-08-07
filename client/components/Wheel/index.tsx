import React, {useEffect, useState} from 'react';

import {Arrow} from '../Arrow';
import {socket} from '../../utils/socket';

import {SpinButton} from './SpinButton';
import {ArrowSlider} from './ArrowSlider';

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

const OpenButton = () => {
    const onClick = () => {
        socket.emit('host', null);
    };

    return <button type="button" onClick={onClick}>Открыть</button>;
};

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
                callbackFinished: () => {
                    socket.emit('wheel', window.wheel.getRotationPosition());
                },
            },
        });
    }, []);

    const [angle, setAngle] = useState(0);
    const [card, setCard] = useState<string[]>([]);
    const [host, setHost] = useState<string | null>(null);

    useEffect(() => {
        socket.on('card', (value: string[]) => {
            setCard(value);
        });
    }, []);

    useEffect(() => {
        socket.on('angle', (value: number) => {
            setAngle(value);
        });
    }, []);

    useEffect(() => {
        socket.on('wheel', (value: number) => {
            window.wheel.rotationAngle = value;
            window.wheel.draw();
        });
    }, []);

    useEffect(() => {
        socket.on('host', (value: string | null) => {
            setHost(value);
        });
    }, []);

    const onChange = (value: number) => {
        setAngle(value);
        socket.emit('angle', value);
    };

    const isHost = host === socket.id;
    const isWheelVisible = host === null || isHost;

    let button;
    if (host === socket.id) {
        button = <OpenButton />;
    } else if (host !== null) {
        button = null;
    } else {
        button = <SpinButton />;
    }

    return (
        <div className={css.wrapper}>
            <div className={css.wheelWrapper}>
                <canvas id="wheel" width="500" height="500" />
                {isWheelVisible ? null : <div className={css.wheelCoverTop} />}
                <div className={css.wheelCover}>
                    <ArrowSlider value={angle} onChange={onChange} />
                </div>
                <div className={css.arrow}>
                    <Arrow angle={angle} />
                </div>
            </div>
            {button}
            {card}
        </div>
    );
};
