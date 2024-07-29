import { Card, Typography } from 'antd';
import * as T from '../types/chat';
import { CURRENT_USER_ID } from '../utils/constans';

interface MessageBalloonProps {
    message: T.Message;
}

function MessageBalloon({ message }: MessageBalloonProps) {
    const { text, sender, timestamp } = message;

    return (
        <div className={`message-balloon ${sender}`}>
            <Card
                size="small"
                bordered={false}
                style={{ backgroundColor: sender === CURRENT_USER_ID ? '#FEE9B6' : '#f0f0f0' }}
            >
                <Typography.Text style={{ color: sender === CURRENT_USER_ID ? '#1F242C' : '#000' }}>
                    {text}
                </Typography.Text>
                <Typography.Text type="secondary" style={{ fontSize: '12px', marginTop: '4px', display: 'block' }}>
                    {timestamp.toLocaleString()}
                </Typography.Text>
            </Card>
        </div>
    );
}

export default MessageBalloon;
