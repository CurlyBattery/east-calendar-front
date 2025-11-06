import {$host} from "./index.ts";
import type {IUser} from "../types/types.ts";

export const createUser = async (user: IUser) => {
    const { data } = await $host.post('users', user);
    return data;
 };

export const fetchUsers = async () => {
    const { data } = await $host.get('users');
    return data;
}
