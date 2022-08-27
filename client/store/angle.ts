import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type Status = 'pending' | 'done';

export type Angle = {
    status: Status;
    value: number;
};

const initialState: Angle = {
    status: 'done',
    value: 0,
};

export const angleSlice = createSlice({
    name: 'angle',
    initialState,
    reducers: {
        setup(state: Angle, action: PayloadAction<number>) {
            state.value = action.payload;
        },
        setPending(state: Angle) {
            state.status = 'pending';
        },
        setDone(state: Angle) {
            state.status = 'done';
        },
    },
});
