import {$host} from "./index.ts";
import type {IUser} from "../types/user.ts";

export const getUsers = async () => {
    const { data } = await $host.get<IUser[]>('users', {withCredentials: true});
    return data;
}

export const getUser = async (id: string) => {
    const { data } = await $host.get<IUser>(`users/${id}`, {withCredentials: true});
    return data;
}

export const updateUser = async (id: string, user: IUser) => {
    const { data } = await $host.patch(`users/${id}`, user, {withCredentials: true});
    return data;
}

export const deleteUser = async (id: string) => {
    const { data } = await $host.delete(`users/${id}`, {withCredentials: true});
    return data;
}
