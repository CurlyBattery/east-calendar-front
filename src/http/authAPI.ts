import type {IUser} from "../types/user.ts";
import {$host} from "./index.ts";

export const registerUser = async (user: IUser) => {
    const { data } = await $host.post(
        'auth/register',
        user,
        {withCredentials: true});
    return data;
}

export const loginUser = async (email: string, password: string) => {
    const { data } = await $host.post(
        'auth/login',
        {
            email,
            password
        },
        {withCredentials: true}
    );
    console.log(data)
    return data;
}

export const logoutUser = async () => {
    const { data } = await $host.post('auth/logout', {},{withCredentials: true});
    return data;
}

export const refreshTokens = async () => {
    const { data } = await $host.post('auth/refresh', {},{withCredentials: true});
    return data;
}

export const me = async () => {
    const { data } = await $host.get(
        'auth',
        {
            withCredentials: true
        }
    );
    return data;
}