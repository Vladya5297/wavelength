import {configureStore} from '@reduxjs/toolkit';

import {angleSlice} from './angle';
import type {Angle} from './angle';
import {hostSlice} from './host';
import type {Host} from './host';
import {cardSlice} from './card';
import type {Card} from './card';
import {wheelSlice} from './wheel';
import type {Wheel} from './wheel';
import {roomSlice} from './room';
import type {Room} from './room';

export type State = {
    angle: Angle;
    host: Host;
    card: Card;
    wheel: Wheel;
    room: Room;
};

export const store = configureStore<State>({
    reducer: {
        angle: angleSlice.reducer,
        host: hostSlice.reducer,
        card: cardSlice.reducer,
        wheel: wheelSlice.reducer,
        room: roomSlice.reducer,
    },
});
