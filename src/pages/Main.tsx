import { Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import UserList from '../components/UsersList';
import { UsersService } from '../services/usersService';
import { useQuery } from '@tanstack/react-query';


function MainPage() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['users'],
        queryFn: UsersService.getUsers
    })

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data.</div>;
    }

    return (
        <Layout>
            <Content>
                <Layout
                    style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
                >
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <UserList users={data!} />
                    </Sider>
                </Layout>
            </Content>
        </Layout>
    );
}

export default MainPage;