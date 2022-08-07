import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type Angle = number;

export const angleSlice = createSlice({
    name: 'angle',
    initialState: 0 as Angle,
    reducers: {
        setup(_, action: PayloadAction<Angle>) {
            return action.payload;
        },
    },
});
