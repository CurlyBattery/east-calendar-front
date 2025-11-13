import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../types/user.ts";

interface AuthState {
    isAuth: boolean;
    currentUser: IUser | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuth: false,
    currentUser: null,
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authStart(state) {
            state.loading = true;
            state.error = null;
        },
        authSuccess(state) {
            state.loading = false;
            state.isAuth = true;
        },
        authLogout(state) {
            state.isAuth = false;
        },
        authError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        setCurrentUser: (state, action: PayloadAction<IUser | null>) => {
            state.currentUser = action.payload;
        },
        removeCurrentUser: (state) => {
            state.currentUser = null;
        }
    }
});

export const { authStart, authSuccess, authLogout, authError, setCurrentUser, removeCurrentUser } = authSlice.actions;
export default authSlice.reducer;