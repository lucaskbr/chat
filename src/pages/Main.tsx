import { useEffect, useState } from 'react';

import { Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

import { useQuery } from '@tanstack/react-query';

import * as T from '../types';

import { ChatService } from '../services/chatService';
import { UsersService } from '../services/usersService';

import Loading from '../components/Loading';
import Chat from '../components/Chat';
import UserList from '../components/UsersList';

function MainPage() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [currentChat, setCurrentChat] = useState<T.Chat | null>(null);
    const [selectedUser, setSelectedUser] = useState<T.User | null>(null);

    const {
        data: users,
        isLoading: isLoadingUsers,
        isError: isErrorUsers
    } = useQuery({
        queryKey: ['users'],
        queryFn: UsersService.getUsers
    });

    const { data: chat,
        isLoading: isLoadingChat,
    } = useQuery({
        queryKey: ['chat', selectedUser],
        queryFn: () => ChatService.getChatFrom(selectedUser!),
        enabled: !!selectedUser,
    });

    useEffect(() => {
        if (chat) {
            setCurrentChat(chat);
        }
    }, [chat])


    if (isLoadingUsers) {
        return <div>Loading...</div>;
    }

    if (isErrorUsers) {
        return <div>Error occurred while fetching data.</div>;
    }

    return (
        <Layout>
            <Content>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG
                    }}
                >
                    <Sider style={{
                        background: colorBgContainer,
                        height: '100vh',
                        overflowY: 'auto',
                    }} width={320} >
                        <UserList users={users!} onClick={(user) => setSelectedUser(user)} />
                    </Sider>

                    <Content style={{ height: '100vh', padding: '0 24px' }}>
                        {isLoadingChat && (
                            <Loading />
                        )}

                        {!isLoadingChat && currentChat && (
                            <Chat chat={currentChat} />
                        )}
                    </Content>
                </Layout>
            </Content>
        </Layout>
    );
}

export default MainPage;