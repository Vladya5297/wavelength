import {createSlice} from '@reduxjs/toolkit';

type Status = 'pending' | 'done';

export type Wheel = {
    status: Status;
};

const initialState: Wheel = {
    status: 'done',
};

export const wheelSlice = createSlice({
    name: 'wheel',
    initialState,
    reducers: {
        setPending(state: Wheel) {
            state.status = 'pending';
        },
        setDone(state: Wheel) {
            state.status = 'done';
        },
    },
});
