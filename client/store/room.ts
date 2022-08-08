import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type Room = string;

export const roomSlice = createSlice({
    name: 'room',
    initialState: '' as Room,
    reducers: {
        setup(_, action: PayloadAction<Room>) {
            return action.payload;
        },
    },
});
