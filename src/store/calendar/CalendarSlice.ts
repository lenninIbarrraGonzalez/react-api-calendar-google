import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CalendarState {
    calendarEvents: any[];
}

const initialState: CalendarState = {
    calendarEvents: [],
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setCalendarEvents: (state, action: PayloadAction<any[]>) => {
            state.calendarEvents = action.payload;
        },
    },
});

export const { setCalendarEvents } = calendarSlice.actions;