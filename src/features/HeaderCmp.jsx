import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme, Switch, Space } from "antd";
import { OnlineCmp } from "./Online";

const { Header } = Layout;

const HeaderCmp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <div style={{ width: "100%" }} className="d-flex justify-content-between">
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
              checkedChildren="Light mode"
              unCheckedChildren="Dark mode"
              defaultChecked
            />
          </Space>
        </div>
      </div>
    </Header>
  );
};

export default HeaderCmp;
