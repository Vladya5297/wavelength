import React from 'react';
import {useSelector} from 'react-redux';
import {useMediaQuery} from 'react-responsive';

import type {State} from '~/store';

import {Portrait, Landscape} from './components/Layout';

export const Game = () => {
    const cards = useSelector((state: State) => state.card);
    const portrait = useMediaQuery({orientation: 'portrait'});

    return portrait ? <Portrait cards={cards} /> : <Landscape cards={cards} />;
};
