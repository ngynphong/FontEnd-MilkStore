import { Content } from "antd/es/layout/layout";
import "./index.scss"
import { Card, Col, Divider, Row, Space, Typography } from "antd";
import {
    ProductOutlined, GroupOutlined, UsergroupAddOutlined,
    MoneyCollectOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";


function Overviewadmin() {
    return (
        <div>

            <Content
                style={{
                    margin: '50px 16px',
                    height: 590,
                    padding: 24,
                    minHeight: 280,
                    // background: colorBgContainer,
                    // borderRadius: borderRadiusLG,
                }}
            >
                <div>
                    <Space direction='horizontal'>
                        <Card>
                            <Space direction="horizontal">
                                <ProductOutlined />
                                <small>Sản Phẩm</small>
                            </Space>
                            <Typography.Title>234344</Typography.Title>
                        </Card>
                        <Card>
                            <Space direction="horizontal">
                                <GroupOutlined />
                                <small>Loại</small>
                            </Space>
                            <Typography.Title>6</Typography.Title>
                        </Card>
                        <Card>
                            <Space direction="horizontal">
                                <UsergroupAddOutlined />
                                <Link to="/">
                                    <small>Lượng khách hàng</small>
                                </Link>
                            </Space>
                            <Typography.Title>234344</Typography.Title>
                        </Card>
                        <Card>
                            <Space direction="horizontal">
                                <MoneyCollectOutlined />
                                <small>Tổng số tiền bán được</small>
                            </Space>
                            <Typography.Title>$234344</Typography.Title>
                        </Card>
                    </Space>
                    <Divider />
                    {/* gutter là khoảng cách */}
                    <Row gutter={24}>
                        <Col span={12}>
                            <Card>
                                <Typography.Title> 
                                    <lineGraph/>
                                </Typography.Title>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card>
                                <Typography.Title>Sometime</Typography.Title>
                            </Card>
                        </Col>
                    </Row>
                </div>

            </Content>


        </div>
    )
}

export default Overviewadmin;