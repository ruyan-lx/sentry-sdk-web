import ConcentrationDurationDistributionEcharts from "@/components/echarts_option";
import { EyeOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Col, Progress, ProgressProps, Row } from "antd";
import { useNavigate } from "react-router-dom";

const pageOptions: echarts.EChartsOption = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['今日', '本周', '上周', '本月', '上月']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '今日',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '本周',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '上周',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '本月',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '上月',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
}


const conicColors: ProgressProps['strokeColor'] = {
    '5%': '#52c41a',
    '10%': '#faad14',
    '20%': '#ff4d4f',
};

const HealthStatus = () => {

    const navigator = useNavigate();

    return (
        <>
            <Card bordered={false} className="mb-2">
                <Row>
                    <Col xs={24} sm={6}>
                        <Card title='健康状态' className="mr-2">
                            <div className="w-40">
                                <Badge.Ribbon text="健康" color="green">
                                    <Progress status="success" type="circle" percent={96} format={(percent) => `${percent}分`} />
                                </Badge.Ribbon>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={18}>
                        <Card title="各类型错误发生率">
                            <Row>
                                <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                                    <Progress type="circle" percent={16.8} strokeColor={conicColors} />
                                    <p>js错误</p>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                                    <Progress type="circle" percent={3.5} strokeColor={conicColors} />
                                    <p>自定义异常</p>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                                    <Progress type="circle" percent={29} strokeColor={conicColors} />
                                    <p>静态资源异常</p>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                                    <Progress type="circle" percent={20.3} strokeColor={conicColors} />
                                    <p>接口异常</p>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                                    <Progress type="circle" percent={2.3} strokeColor={conicColors} />
                                    <p>框架错误</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Card>
            <Row gutter={[6,6]}>
                <Col xs={24} md={12} lg={8}>
                    <Card title="js报错" extra={<Button onClick={() => navigator('/index/system_error')} icon={<EyeOutlined />}>详情</Button>}>
                        <ConcentrationDurationDistributionEcharts options={pageOptions} style={{ 'width': '100%', 'height': '240px' }}></ConcentrationDurationDistributionEcharts>
                    </Card>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Card title="自定义异常" extra={<Button onClick={() => navigator('/index/system_error')} icon={<EyeOutlined />}>详情</Button>} >
                        <ConcentrationDurationDistributionEcharts options={pageOptions} style={{ 'width': '100%', 'height': '240px' }}></ConcentrationDurationDistributionEcharts>
                    </Card>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Card title="静态资源异常" extra={<Button onClick={() => navigator('/index/system_error')} icon={<EyeOutlined />}>详情</Button>}>
                        <ConcentrationDurationDistributionEcharts options={pageOptions} style={{ 'width': '100%', 'height': '240px' }}></ConcentrationDurationDistributionEcharts>
                    </Card>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Card title="接口异常" extra={<Button onClick={() => navigator('/index/system_error')} icon={<EyeOutlined />}>详情</Button>}>
                        <ConcentrationDurationDistributionEcharts options={pageOptions} style={{ 'width': '100%', 'height': '240px' }}></ConcentrationDurationDistributionEcharts>
                    </Card>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Card title="框架错误" extra={<Button onClick={() => navigator('/index/system_error')} icon={<EyeOutlined />}>详情</Button>}>
                        <ConcentrationDurationDistributionEcharts options={pageOptions} style={{ 'width': '100%', 'height': '240px' }}></ConcentrationDurationDistributionEcharts>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default HealthStatus;