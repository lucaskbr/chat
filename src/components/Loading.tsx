import { Spin } from 'antd';

function Loading() {
    return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <Spin size="large" />
    </div>);
}

export default Loading;
