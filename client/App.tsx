import React from 'react';
import {useSelector} from 'react-redux';

import {Enter} from './components/Enter';
import {Game} from './components/Game';
import type {State} from './store';

export const App = () => {
    const room = useSelector((state: State) => state.room);

    return (
        room ? <Game /> : <Enter />
    );
};
