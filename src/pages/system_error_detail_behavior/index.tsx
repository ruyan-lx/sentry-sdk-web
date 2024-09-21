import { Card, Col, Row } from "antd";
import { data, jsonDataDetail } from './mockData'
import { useEffect, useState } from "react";
import { E_TrackerDetailType } from "@/main";
import dayjs from "dayjs";
import ReactJson from 'react-json-view';
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from '@/assets/lotties/error.json'

const SystemErrorDetailBehavior = () => {

    const navigator = useNavigate();

    const [pageLoading, setPageLoading] = useState<boolean>(true);

    const [selected, setSelected] = useState(null);

    const [jsonData, setJsonData] = useState({});

    const recordItemClick = (item, index) => {
        setJsonData(JSON.parse(item.content));
        setSelected(index);
    }

    useEffect(() => {
        setPageLoading(true)
        setTimeout(() => {
            setPageLoading(false)
        }, 2000)
    }, [])
    return (
        <Card title='错误详情' extra={<CloseOutlined onClick={() => navigator(-1)} />}>
            <Row>
                <Col xs={24} sm={4}>
                    <Lottie animationData={animationData} loop={true} />
                </Col>
                <Col xs={24} sm={20}>
                    <Card loading={pageLoading}>
                        <ReactJson src={JSON.parse(jsonDataDetail)} theme="summerfruit:inverted" />
                    </Card>
                </Col>
            </Row>
            <Card title='报错前用户操作记录' >
                <Row>
                    <Col xs={24} sm={12}>
                        <Card title={'共' + data.length + '条记录'} loading={pageLoading}>
                            <div className='overflow-y-auto h-80'>
                                {
                                    data.map((item, index) => (
                                        <div key={item.uuid} className={`p-2 mb-2 border-b-2 cursor-pointer ${selected === index ? 'bg-blue-100' : ''}`} onClick={() => recordItemClick(item, index)}>
                                            <p>{item.uuid}</p>
                                            <p>{dayjs(item.timestamp).format('YYYY-MM-DD HH:mm:ss')}</p>
                                            <p>{E_TrackerDetailType[item.type]}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Card loading={pageLoading} title="步骤详情">
                            <div className='overflow-y-auto h-80'>
                                <ReactJson src={jsonData} theme="summerfruit:inverted" />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Card >
        </Card>
    )
}

export default SystemErrorDetailBehavior;