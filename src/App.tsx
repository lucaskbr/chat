import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainPage from './pages/Main'
import { ConfigProvider } from 'antd';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#1F242C',
                    },
                }}
            >
                <MainPage />
            </ConfigProvider>
        </QueryClientProvider>
    )
}

export default App
