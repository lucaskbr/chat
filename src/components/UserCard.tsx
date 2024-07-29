import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { User } from '../types/user';

interface UserCardProps {
    user: User;
    onClick: (user: User) => void;
}

function UserCard({ user, onClick }: UserCardProps) {
    return (
        <Card
            onClick={() => onClick(user)}
            style={{
                width: 300,
                cursor: 'pointer',
                transition: 'box-shadow 0.3s',
                ':hover': {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                },
            }}>
            <Card.Meta
                avatar={
                    <Avatar
                        size={64}
                        icon={user.avatarUrl ? <img src={user.avatarUrl} alt={user.name} /> : <UserOutlined />}
                    />
                }
                title={user.name}
                description={user.isOnline ? 'Online' : 'Offline'}
            />
        </Card>
    );
}

export default UserCard;
