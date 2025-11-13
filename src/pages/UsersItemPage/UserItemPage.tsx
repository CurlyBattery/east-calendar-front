import {type FC, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import type {IUser} from "../../types/user.ts";
import {useTypeSelector} from "../../hooks/useTypeSelector.ts";
import {getUser} from "../../http/userAPI.ts";

type UserItemPageProps = {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser>();
    const { id } = useParams<UserItemPageProps>();
    const { isAuth } = useTypeSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        getUser(id!).then(data => setUser(data));
    })

    useEffect(() => {
        if(!isAuth) navigate('/');
    }, [isAuth, navigate])

    return (
        <div key={user?.id}>
            {user?.avatarUrl} - {user?.email}
        </div>
    );
};

export default UserItemPage;