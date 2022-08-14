import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type Status = 'pending' | 'done';

export type Wheel = {
    status: Status;
    value: number;
};

const initialState: Wheel = {
    status: 'done',
    value: -25,
};

export const wheelSlice = createSlice({
    name: 'wheel',
    initialState,
    reducers: {
        setup(state: Wheel, action: PayloadAction<number>) {
            state.value = action.payload;
        },
        setPending(state: Wheel) {
            state.status = 'pending';
        },
        setDone(state: Wheel) {
            state.status = 'done';
        },
    },
});
