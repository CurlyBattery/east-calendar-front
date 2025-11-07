import type {AppDispatch} from "../index.ts";
import {fetchUsersError, fetchUsersStart, fetchUsersSuccess} from "../reducers/userReducer.ts";
import {getUsers} from "../../http/userAPI.ts";

export const fetchUsers = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchUsersStart());
            const data = await getUsers();
            dispatch(fetchUsersSuccess(data));
        }
        catch (e) {
            dispatch(fetchUsersError('Произошла ошибка при загрузке пользователей'));
        }
    }
}