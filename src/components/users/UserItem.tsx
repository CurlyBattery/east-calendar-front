import type {FC} from "react";
import type {IUser} from "../../types/user.ts";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
    return (
        <div onClick={() => onClick(user)} key={user.id}>
            {user.id}. {user.name}
        </div>
    );
};

export default UserItem;
