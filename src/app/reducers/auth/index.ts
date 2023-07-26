import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";

interface IAuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: null | string;
    checkbox: boolean;
    isModalLoginOpen: boolean;
}

const initialState: IAuthState = {
    isAuth: false,
    isLoading: false,
    user: {} as IUser,
    error: null,
    checkbox: false,
    isModalLoginOpen: false,
};

export const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        setRemem(state, action: PayloadAction<boolean>) {
            state.checkbox = action.payload;
        },
        setisModalLoginOpen(state, action: PayloadAction<boolean>) {
            state.isModalLoginOpen = action.payload;
        },
    },
});

export default authReducer.reducer;
