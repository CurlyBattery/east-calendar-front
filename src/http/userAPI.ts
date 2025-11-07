import {$host} from "./index.ts";
import type {IUser} from "../types/user.ts";

export const createUser = async (user: IUser) => {
    const { data } = await $host.post('users', user);
    return data;
};

export const getUsers = async () => {
    const { data } = await $host.get<IUser[]>('users');
    return data;
}

export const getUser = async (id: string) => {
    const { data } = await $host.get<IUser>('users/' + id);
    return data;
}