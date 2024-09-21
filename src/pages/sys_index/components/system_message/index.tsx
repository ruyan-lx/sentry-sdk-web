import { List, Typography } from 'antd';
import Lottie from 'lottie-react';
import animationData from '@/assets/lotties/message.json'

const { Text } = Typography;

const messages = [
    { id: 1, content: '系统添加维护人员刘杰', time: '2024-09-19 10:30', read: true },
    { id: 2, content: '周伟分享了一条记录给您', time: '2024-09-19 09:15', read: true },
    { id: 3, content: '系统产生了错误日志', time: '2024-09-18 18:45', read: true },
    { id: 4, content: '系统产生了错误日志', time: '2024-09-18 20:10', read: false },
];

const SystemMessage = () => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        className='cursor-pointer'
                        avatar={<div className='w-8 h-10'>
                            <Lottie animationData={animationData} loop={true} />
                        </div>}
                        title={
                            <Text strong={item.read === false}>{item.content}</Text>
                        }
                        description={
                            <>
                                <Text type="secondary">{item.time}</Text>
                                <Text type={item.read ? "success" : "danger"} style={{ marginLeft: '10px' }}>
                                    {item.read ? '已读' : '未读'}
                                </Text>
                            </>
                        }
                    />
                </List.Item>
            )}
        />
    );
};

export default SystemMessage;
