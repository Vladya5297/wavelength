import {configureStore} from '@reduxjs/toolkit';

import {angleSlice} from './angle';
import type {Angle} from './angle';
import {hostSlice} from './host';
import type {Host} from './host';
import {cardSlice} from './card';
import type {Card} from './card';

export type State = {
    angle: Angle;
    host: Host;
    card: Card;
};

export const store = configureStore({
    reducer: {
        angle: angleSlice.reducer,
        host: hostSlice.reducer,
        card: cardSlice.reducer,
    },
});
