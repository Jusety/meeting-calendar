import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
import event from "./reducers/event";

export const store = configureStore({
    reducer: { auth, event },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
