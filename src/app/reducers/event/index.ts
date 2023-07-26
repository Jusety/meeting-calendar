import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

interface IEventState {
    guests: IUser[];
    events: IEvent[];
}

const initialState: IEventState = {
    events: [],
    guests: [],
};

export const eventReducer = createSlice({
    name: "event",
    initialState,
    reducers: {
        setGuests(state, action: PayloadAction<IUser[]>) {
            state.guests = action.payload;
        },
        setEvents(state, action: PayloadAction<IEvent[]>) {
            state.events = action.payload;
        },
    },
});

export default eventReducer.reducer;
