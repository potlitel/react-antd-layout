import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme, Switch, Space } from "antd";
import Rutas from "./routes";
import NavItems from "./features/NavItems";
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
        <NavItems />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div style={{ width: "100%" }} class="d-flex justify-content-between">
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
            <Space direction="vertical" style={{ paddingRight: "2%" }}>
              <Switch
                // checkedChildren={<CheckOutlined />}
                // unCheckedChildren={<CloseOutlined />}
                checkedChildren="Light mode"
                unCheckedChildren="Dark mode"
                defaultChecked
              />
            </Space>
          </div>
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
