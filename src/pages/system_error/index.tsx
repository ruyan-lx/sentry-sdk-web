import { Button, Card, message, Table } from "antd";
import { data } from "./mockData"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { E_TrackerDetailType } from "@/main";

const SystemError = () => {
    const navigator = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        message.loading("加载中...");
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            message.open({
                type: "success",
                content: "加载成功",
                duration: 2,
            })
        }, 2000)
    };

    const columns = [
        { title: "uuid", dataIndex: "uuid", key: "uuid" },
        { title: "发生时间", dataIndex: "timestamp", key: "timestamp" },
        { title: "状态", dataIndex: "status", key: "status" },
        { title: "错误类型", dataIndex: "type", key: "type", render: (text: E_TrackerDetailType) => E_TrackerDetailType[text] || "" },
        {
            title: "操作",
            dataIndex: "action",
            key: "action",
            render: (_, record) => (
                <>
                    <Button
                        type="link"
                        onClick={() => navigator(`/index/system_error_detail_behavior/${record.uuid}`)}
                    >
                        错误详情
                    </Button>
                    <Button
                        type="link"
                        onClick={() => navigator(`/index/system_error_detail_rrwebUrl/${String(record.rrwebUrl).replace(/\//g, '_')}`)}
                    >
                        查看回放
                    </Button>
                </>
            ),
        },
    ];

    return (
        <Card>
            <Table dataSource={data} columns={columns} pagination={{
                pageSize: 10,
                total: data.length,
                onChange: handleSearch
            }} loading={loading} />
        </Card>
    )
}

export default SystemError;