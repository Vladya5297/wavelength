import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type Room = string | null;

export const roomSlice = createSlice({
    name: 'room',
    initialState: null as Room,
    reducers: {
        setup(_, action: PayloadAction<Room>) {
            return action.payload;
        },
    },
});
