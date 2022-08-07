import React from 'react';

type Props = {
    value: number;
    onChange: (value: number) => void;
};

export const ArrowSlider = ({value, onChange}: Props) => {
    const callback = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.target.value));
    };

    return <input type="range" min={-90} max={90} step={1} value={value} onChange={callback} />;
};
