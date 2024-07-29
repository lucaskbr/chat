import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface UserCardProps {
    name: string;
    isOnline: boolean;
    avatarUrl?: string;
}

function UserCard({ name, isOnline, avatarUrl }: UserCardProps) {
    return (
        <Card style={{ width: 300 }}>
            <Card.Meta
                avatar={
                    <Avatar
                        size={64}
                        icon={avatarUrl ? <img src={avatarUrl} alt={name} /> : <UserOutlined />}
                    />
                }
                title={name}
                description={isOnline ? 'Online' : 'Offline'}
            />
        </Card>
    );
}

export default UserCard;
