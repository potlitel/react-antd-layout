import React from "react";
import { Spin } from "antd";

const Nav4 = () => {
  return (
    <div className="App">
      <div
        style={{
          display: "block",
          width: 700,
          padding: 10,
        }}
      >
        <h4>Demo for Spin</h4>
        <Spin size="large" />
      </div>
    </div>
  );
};

export default Nav4;
