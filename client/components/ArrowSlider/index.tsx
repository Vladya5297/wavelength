import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SliderBase from 'rc-slider';
import type {SliderProps, SliderRef} from 'rc-slider/lib/Slider';

import {socket} from 'client/utils/socket';
import type {State} from 'client/store';
import {angleSlice} from 'client/store/angle';

const Slider = SliderBase as React.ForwardRefExoticComponent<
SliderProps<number>
& React.RefAttributes<SliderRef>
>;

const backgroundColor = '#ec9221';

export const ArrowSlider = () => {
    const dispatch = useDispatch();
    const angle = useSelector((state: State) => state.angle);

    const onChange = (value: number) => {
        dispatch(angleSlice.actions.setup(value));
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
