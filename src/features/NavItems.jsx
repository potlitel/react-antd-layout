import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FileDoneOutlined,
  FontColorsOutlined,
  LoadingOutlined,
  RiseOutlined,
  ExpandOutlined,
  DashOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const NavItems = () => {
  let location = useLocation();
  const [current, setCurrent] = useState(
    location.pathname === "/" || location.pathname === ""
      ? "/"
      : location.pathname
  );
  //or simply use const [current, setCurrent] = useState(location.pathname)

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

  function handleClick(e) {
    console.log(location.pathname);
    setCurrent(e.key);
  }
  return (
    <Menu
      theme="dark"
      onClick={handleClick}
      selectedKeys={[current]}
      mode="inline"
      // defaultSelectedKeys={[location.pathname]}
    >
      <Menu.Item key="/">
        <Link to="/">
          <HomeOutlined
            style={{
              fontSize: "20px",
            }}
          />
          <span>Antd Components</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/nav1">
        <Link to="/nav1">
          <ExpandOutlined
            style={{
              fontSize: "20px",
            }}
          />
          <span>Statistic</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/nav2">
        <Link to="/nav2">
          <RiseOutlined
            style={{
              fontSize: "20px",
            }}
          />
          <span>Steps</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/nav3">
        <Link to="/nav3">
          <DashOutlined
            style={{
              fontSize: "20px",
            }}
          />
          <span>Timeline</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/nav4">
        <Link to="/nav4">
          <LoadingOutlined
            style={{
              fontSize: "20px",
            }}
          />
          <span>Spin</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/nav5">
        <Link to="/nav5">
          <FontColorsOutlined
            style={{
              fontSize: "20px",
            }}
          />
          <span>Tooltip</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/nav6">
        <Link to="/nav6">
          <FileDoneOutlined
            style={{
              fontSize: "20px",
            }}
          />
          <span>Result</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavItems;
