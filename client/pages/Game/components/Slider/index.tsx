import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ArrowSlider} from '~/components/ArrowSlider';
import {useGame} from '~/utils/useGame';
import {socket} from '~/utils/socket';
import {angleSlice} from '~/store/angle';
import type {State} from '~/store';

export const Slider = () => {
    const {isHost} = useGame();
    const angle = useSelector((state: State) => state.angle.value);
    const isDisabled = useSelector((state: State) => state.angle.status === 'pending');

    const dispatch = useDispatch();

    const onChange = (value: number) => {
        dispatch(angleSlice.actions.setup(value));
        socket.emit('angle', value);
    };

    return !isHost ? <ArrowSlider value={angle} disabled={isDisabled} onChange={onChange} /> : null;
};
