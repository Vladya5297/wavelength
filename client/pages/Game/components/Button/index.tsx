import React from 'react';

import {useGame} from '~/utils/useGame';

import {OpenButton} from '../OpenButton';
import {SpinButton} from '../SpinButton';

export const Button = () => {
    const {isRunning, isHost} = useGame();

    if (isRunning && isHost) {
        return <OpenButton />;
    }

    if (isRunning) {
        return null;
    }

    return <SpinButton />;
};
