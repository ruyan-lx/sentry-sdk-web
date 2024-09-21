import { Card } from 'antd';
import axios from 'axios';
import { isArray } from 'lodash-unified';
import { createRef, useEffect, useState } from 'react';
import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';

const SystemErrorDetailRrwebUrl = () => {

    const { rrwebUrl } = useParams();

    const navigator = useNavigate();

    const [pageLoading, setPageLoading] = useState(false)

    useEffect(() => {

        const fn = async () => {
            setPageLoading(true)
            const response = await axios.get('http://218.77.107.37:49000/' + String(rrwebUrl).replace(/_/g, '/'), {
                responseType: 'text',
            });

            const text = response.data;

            const dom = document.getElementById('player')

            console.log([dom]);

            if (dom && text && isArray(JSON.parse(text))) {
                new rrwebPlayer({
                    target: dom,
                    data: { events: JSON.parse(text) },
                });
            }
            setPageLoading(false)
        }
        fn();
    }, [rrwebUrl])

    return (
        <Card title='回放' loading={pageLoading} extra={<CloseOutlined onClick={() => navigator(-1)} />}>
            <div id="player" className='flex items-center justify-center'>
            </div>
        </Card>
    )
}

export default SystemErrorDetailRrwebUrl;