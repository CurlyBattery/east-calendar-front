import type {AppDispatch} from "../index.ts";
import {loginUser, logoutUser, me, registerUser} from "../../http/authAPI.ts";
import {authError, authLogout, authStart, authSuccess, setCurrentUser} from "../reducers/authReducer.ts";

export const register = (email: string, password: string, name: string, avatarUrl: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(authStart());
            await registerUser({email, password, name, avatarUrl});
            const user = await me();
            dispatch(authSuccess());
            dispatch(setCurrentUser(user));
        } catch (e) {
            const message = e.response?.data?.message || 'Ошибка регистрации';
            dispatch(authError(message));
        }
    }
};

export const login = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(authStart());
            await loginUser(email, password);
            const user = await me();
            dispatch(authSuccess());
            dispatch(setCurrentUser(user));
        } catch (e) {
            const message = e.response?.data?.message || 'Ошибка при входе';
            dispatch(authError(message));
        }
    }
};

export const logout = () => {
    return async (dispatch: AppDispatch) => {
        await logoutUser();
        dispatch(authLogout())
    }
}