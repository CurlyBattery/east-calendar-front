import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer.ts";
import authReducer from "./reducers/authReducer.ts";
import currentUserReducer from "./reducers/currentUserReducer.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        currentUser: currentUserReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;