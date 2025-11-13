import type {IUser} from "../../types/user.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface CurrentUserState {
    currentUser: IUser | null;
}

const initialState: CurrentUserState = {
    currentUser: null,
};

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<IUser | null>) => {
            state.currentUser = action.payload;
        }
    }
});

export const { setCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;