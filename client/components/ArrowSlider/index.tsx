import React from 'react';
import {useSelector} from 'react-redux';
import Slider from 'rc-slider';

import {socket} from 'client/utils/socket';
import type {State} from 'client/store';

const backgroundColor = '#ec9221';

export const ArrowSlider = () => {
    const angle = useSelector((state: State) => state.angle);

    const onChange = (value: number | number[]) => {
        socket.emit('angle', value);
    };

    return (
        <Slider
            min={-90}
            max={90}
            value={angle}
            onChange={onChange}
            handleStyle={{
                height: 28,
                width: 28,
                marginTop: -9,
                backgroundColor,
                border: 'none',
                boxShadow: 'none',
            }}
            trackStyle={{backgroundColor, height: 10}}
            railStyle={{height: 10}}
        />
    );
};
