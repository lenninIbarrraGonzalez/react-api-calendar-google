import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CalendarState {
    calendarEvents: any[];
    errorMessage: string | null;
}

const initialState: CalendarState = {
    calendarEvents: [],
    errorMessage: null,
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setCalendarEvents: (state, action: PayloadAction<any[]>) => {
            state.calendarEvents = action.payload;
            state.errorMessage = null;
        },
        setErrorMessage: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload;
        },
    },
});

export const { setCalendarEvents } = calendarSlice.actions;