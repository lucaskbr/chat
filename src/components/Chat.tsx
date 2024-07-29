import { useState } from 'react';
import * as T from '../types/chat';
import { Avatar, Button, Card, Flex, Input } from 'antd';
import MessageBalloon from './MessageBalloon';
import { CURRENT_USER_ID } from '../utils/constans';

interface ChatProps {
    chat: T.Chat;
}

function Chat({ chat }: ChatProps) {
    const [messages, setMessages] = useState<T.Message[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            const newMessage: T.Message = {
                id: Math.random(),
                text: inputValue,
                timestamp: new Date(),
                sender: CURRENT_USER_ID,
            };
            setMessages([...messages, newMessage]);
            setInputValue('');
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <Card>
            <div>
                <Avatar src={chat.participants[1].avatarUrl} />
                <h2>Message {chat.participants[1].name}</h2>
            </div>
            <div>
                {messages.map((message) => (
                    <>
                        <MessageBalloon key={message.id} message={message} />
                        <br />
                    </>
                ))}
            </div>
            <Flex justify="center" align="flex-end">
                <Input value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..." />
                <br />
                <br />
                <Button type="primary" onClick={handleSendMessage}>Send</Button>
            </Flex>
        </Card >
    );
}

export default Chat;