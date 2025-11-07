import {type FC, useEffect} from "react";

import {useTypeSelector} from "../hooks/useTypeSelector.ts";
import {useActions} from "../hooks/useActions.ts";
import List from "../components/list/List.tsx";
import type {IUser} from "../types/user.ts";
import UserItem from "../components/users/UserItem.tsx";
import {useNavigate} from "react-router-dom";

const UsersPage: FC = () => {
    const { users, error, loading } = useTypeSelector(state => state.user);
    const { fetchUsers } = useActions();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [])

    if(loading) {
        return <h1>Идет загрузка</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) =>
                <UserItem
                    onClick={ (user) => navigate('/users/' + user.id)}
                    key={user.id}
                    user={user}
                />
            }
        />
    );
};

export default UsersPage;