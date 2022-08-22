import React from 'react';
import SliderBase from 'rc-slider';
import type {SliderProps, SliderRef} from 'rc-slider/lib/Slider';

const Slider = SliderBase as React.ForwardRefExoticComponent<
SliderProps<number>
& React.RefAttributes<SliderRef>
>;

const backgroundColor = '#ec9221';

type Props = {
    value: number;
    onChange: (value: number) => void;
};

export const ArrowSlider = ({value, onChange}: Props) => {
    return (
        <Slider
            min={-90}
            max={90}
            value={value}
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
