export interface IUser {
    id?: string;
    name: string;
    password?: string;
    email: string;
    avatarUrl?: string;
}

export interface UserState {
    users: IUser[];
    loading: boolean;
    error: null | string;
}