import type {State} from 'client/store';
import {socket} from 'client/utils/socket';
import React from 'react';
import {useSelector} from 'react-redux';

export const ArrowSlider = () => {
    const angle = useSelector((state: State) => state.angle);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        socket.emit('angle', value);
    };

    return (
        <input type="range" min={-90} max={90} step={1} value={angle} onChange={onChange} />
    );
};
