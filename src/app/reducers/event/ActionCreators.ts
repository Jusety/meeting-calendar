import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { eventReducer } from ".";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export const fetchGuests = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get<IUser[]>("./users.json");
        dispatch(eventReducer.actions.setGuests(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const createEvents = (event: IEvent) => async (dispatch: Dispatch) => {
    try {
        const json = localStorage.getItem("events") || "[]";
        const events = JSON.parse(json) as IEvent[];
        events.push(event);
        dispatch(eventReducer.actions.setEvents(events));
        localStorage.setItem("events", JSON.stringify(events));
    } catch (error) {
        console.log(error);
    }
};

export const fetchEvents = (username: string) => async (dispatch: Dispatch) => {
    try {
        const json = localStorage.getItem("events") || "[]";
        const events = JSON.parse(json) as IEvent[];
        const currentUserEvents = events.filter(
            (e) => e.author === username || e.guest === username
        );
        dispatch(eventReducer.actions.setEvents(currentUserEvents));
    } catch (error) {
        console.log(error);
    }
};

