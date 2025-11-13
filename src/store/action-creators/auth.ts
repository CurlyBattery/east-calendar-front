import type {AppDispatch} from "../index.ts";
import {me, registerUser} from "../../http/authAPI.ts";
import {authError, authStart, authSuccess} from "../reducers/authReducer.ts";
import {setCurrentUser} from "../reducers/currentUserReducer.ts";

export const register = (email: string, password: string, name: string, avatarUrl: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(authStart());
            await registerUser({email, password, name, avatarUrl});
            dispatch(authSuccess());
            const user = await me();
            dispatch(setCurrentUser(user));
        } catch (e) {
            const message = e.response?.data?.message || 'Ошибка регистрации';
            dispatch(authError(message));
        }
    }
}