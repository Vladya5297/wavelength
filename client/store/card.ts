import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type Card = string[];

export const cardSlice = createSlice({
    name: 'card',
    initialState: [] as Card,
    reducers: {
        setup(_, action: PayloadAction<Card>) {
            return action.payload;
        },
    },
});
