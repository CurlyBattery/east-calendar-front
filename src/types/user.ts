export interface IUser {
    id?: string;
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
}

export interface UserState {
    users: IUser[];
    loading: boolean;
    error: null | string;
}