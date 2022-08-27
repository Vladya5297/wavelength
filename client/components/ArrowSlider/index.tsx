import React from 'react';
import SliderBase from 'rc-slider';
import type {SliderProps, SliderRef} from 'rc-slider/lib/Slider';

import css from './style.module.css';

const Slider = SliderBase as React.ForwardRefExoticComponent<
SliderProps<number>
& React.RefAttributes<SliderRef>
>;

type Props = {
    value: number;
    disabled?: boolean;
    onChange: (value: number) => void;
};

export const ArrowSlider = ({value, disabled, onChange}: Props) => {
    return (
        <Slider
            className={css.slider}
            disabled={disabled}
            min={-90}
            max={90}
            value={value}
            onChange={onChange}
        />
    );
};
