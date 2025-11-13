import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuth: false,
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
        }
    }
});

export const { authStart, authSuccess, authLogout, authError } = authSlice.actions;
export default authSlice.reducer;