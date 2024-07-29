import { List } from 'antd';
import UserCard from './UserCard';
import { User } from '../types/user';

interface UserListProps {
    users: User[];
    onClick: (user: User) => void;
}

function UserList({ users, onClick }: UserListProps) {
    return (
        <List
            itemLayout="vertical"
            dataSource={users}
            renderItem={(user) => (
                <List.Item key={user.id}>
                    <UserCard user={user} onClick={onClick} />
                </List.Item>
            )}
        />
    );
}

export default UserList;
