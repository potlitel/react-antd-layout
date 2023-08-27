import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme, Switch, Space, Typography } from "antd";
// import { useThemeSwitcher } from "react-css-theme-switcher";
import Rutas from "./routes";
import NavItems from "./features/NavItems";
import { OnlineCmp } from "./features/Online";

const { Text, Link } = Typography;

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [isDarkMode, setIsDarkMode] = useState();
  // const { switcher, themes } = useThemeSwitcher();

  // function toggleTheme(isChecked) {
  //   // added
  //   setIsDarkMode(isChecked);
  //   switcher({ theme: isChecked ? themes.dark : themes.light });
  // }

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
          <div
            style={{ width: "100%" }}
            className="d-flex justify-content-between"
          >
            <div className="mr-auto">
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
            </div>
            <div className="pr-2">
              <OnlineCmp />
            </div>
            <div className="pr-2">
              <Space direction="vertical">
                <Switch
                  checkedChildren="🌞"
                  unCheckedChildren="🌜"
                  // checked={isDarkMode}
                  // onChange={toggleTheme}
                />
              </Space>
            </div>
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
