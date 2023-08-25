import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link } from "react-router-dom";
import Rutas from "./routes";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">
              <UserOutlined />
              <span>Nav 1</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/nav2">
              <VideoCameraOutlined />
              <span>Nav 2</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/nav3">
              <UploadOutlined />
              <span>Nav 3</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "100vh",
            // minHeight: "100vh",
            // overflow: "auto",
            background: colorBgContainer,
          }}
        >
          {/* Content */}
          <Rutas />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
