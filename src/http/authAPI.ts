import type {IUser} from "../types/user.ts";
import {$host} from "./index.ts";

export const registerUser = async (user: IUser) => {
    const { data } = await $host.post('auth/register', user);
    return data;
}

export const loginUser = async (email: string, password: string) => {
    const { data } = await $host.post('auth/login', {
        email,
        password
    });
    return data;
}

export const logoutUser = async () => {
    const { data } = await $host.delete('auth/logout');
    return data;
}

export const refreshTokens = async () => {
    const { data } = await $host.get('auth/refresh');
    return data;
}

export const me = async () => {
    const { data } = await $host.get('auth');
    return data;
}