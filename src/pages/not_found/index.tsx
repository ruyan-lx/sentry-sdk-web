// src/pages/NotFound.tsx
import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigator = useNavigate();

    return (
        <Result
            status="404"
            title="404"
            subTitle="不好，没有找到这个页面"
            extra={
                <Button type="primary" onClick={() => navigator('/')}>
                    回到首页
                </Button>
            }
        />
    );
};

export default NotFound;
