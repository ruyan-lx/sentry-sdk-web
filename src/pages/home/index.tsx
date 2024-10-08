import React from 'react';
import { Button, Typography, Card, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom'

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {

    const navigator = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Card className="w-full max-w-4xl p-6 shadow-lg rounded-lg bg-white">
                <Title level={1} className="text-center text-3xl mb-4">
                    欢迎使用监控平台
                </Title>
                <Paragraph className="text-center text-lg mb-8">
                    这里是您的监控平台的首页，您可以在这里查看系统状态、配置监控和访问详细的报表。
                </Paragraph>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="text-center my-2">
                            <Title level={2}>10</Title>
                            <Paragraph>系统用户数</Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="text-center my-2">
                            <Title level={2}>5</Title>
                            <Paragraph>警报数</Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="text-center my-2">
                            <Title level={2}>3</Title>
                            <Paragraph>系统监控时间（天）</Paragraph>
                        </Card>
                    </Col>
                </Row>
                <div className="text-center mt-8">
                    <Button type="primary" size="large" onClick={() => navigator('/index/traffic_data')}>
                        进入监控面板
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Home;
