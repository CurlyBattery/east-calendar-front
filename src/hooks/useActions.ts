import {bindActionCreators} from "redux";

import {useAppDispatch} from "./useAppDispatch.ts";
import * as UserActionCreators from '../store/action-creators/user.ts';
import * as AuthActionCreators from '../store/action-creators/auth.ts';

export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators({
        ...UserActionCreators,
        ...AuthActionCreators,
    }, dispatch);
}