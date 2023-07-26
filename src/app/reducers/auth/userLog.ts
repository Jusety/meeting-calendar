import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { authReducer } from ".";
import { IUser } from "../../../models/IUser";

export const login =
    (username: string, password: string, checkbox: boolean) =>
    async (dispatch: Dispatch) => {
        try {
            dispatch(authReducer.actions.setLoading(true));
            const response = await axios.get<IUser[]>("./users.json");
            const mockUser = response.data.find(
                (user) =>
                    user.username === username && user.password === password
            );
            if (mockUser) {
                if (!checkbox) {
                    localStorage.setItem("auth", "true");
                    localStorage.setItem("username", username);
                }
                dispatch(authReducer.actions.setUser(mockUser));
                dispatch(authReducer.actions.setAuth(true));
            } else {
                dispatch(
                    authReducer.actions.setError("Invalid login or password!")
                );
            }
        } catch (error: any) {
            dispatch(authReducer.actions.setError(error.message));
        } finally {
            dispatch(authReducer.actions.setLoading(false));
        }
    };

export const logout = () => (dispatch: Dispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(authReducer.actions.setAuth(false));
    dispatch(authReducer.actions.setUser({} as IUser));
};
