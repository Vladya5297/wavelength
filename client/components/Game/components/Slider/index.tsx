import React from 'react';

import {ArrowSlider} from 'client/components/ArrowSlider';
import {useGame} from 'client/utils/useGame';

export const Slider = () => {
    const {isHost} = useGame();

    return !isHost ? <ArrowSlider /> : null;
};
