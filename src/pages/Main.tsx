import { Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import UserList from '../components/UsersList';


function MainPage() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Content>
                <Layout
                    style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
                >
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <UserList users={[
                            {
                                id: 1,
                                name: 'John Doe',
                                isOnline: true,
                                avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
                            },
                        ]} />
                    </Sider>
                </Layout>
            </Content>
        </Layout>
    );
}

export default MainPage;