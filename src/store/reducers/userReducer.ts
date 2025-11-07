import type {IUser, UserState} from "../../types/user.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState: UserState  = {
    users: [],
    loading: false,
    error: null
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsersStart(state) {
            state.loading = true;
            state.error = null;
            state.users = [];
        },
        fetchUsersSuccess(state, action: PayloadAction<IUser[]>) {
            state.loading = false;
            state.users = action.payload;
        },
        fetchUsersError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersError } = usersSlice.actions;
export default usersSlice.reducer;