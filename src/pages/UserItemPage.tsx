import {type FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUser} from "../http/userAPI.ts";

import type {IUser} from "../types/user.ts";

type UserItemPageProps = {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser>();
    const { id } = useParams<UserItemPageProps>();

    useEffect(() => {
        getUser(id!).then(data => setUser(data));
    })

    return (
        <div key={user?.id}>
            {user?.avatarUrl} - {user?.email}
        </div>
    );
};

export default UserItemPage;