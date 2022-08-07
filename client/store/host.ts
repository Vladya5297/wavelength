import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type Host = string | null;

export const hostSlice = createSlice({
    name: 'host',
    initialState: null as Host,
    reducers: {
        setup(_, action: PayloadAction<Host>) {
            return action.payload;
        },
    },
});
