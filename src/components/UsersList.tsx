import { List } from 'antd';
import UserCard from './UserCard';
import { User } from '../types/user';

interface UserListProps {
    users: User[];
}

function UserList({ users }: UserListProps) {
    return (
        <List
            itemLayout="vertical"
            dataSource={users}
            renderItem={(user) => (
                <List.Item key={user.id}>
                    <UserCard name={user.name} isOnline={user.isOnline} avatarUrl={user.avatarUrl} />
                </List.Item>
            )}
        />
    );
}

export default UserList;
