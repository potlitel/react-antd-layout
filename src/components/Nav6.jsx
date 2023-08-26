import React from "react";
import { Result } from "antd";

const Nav6 = () => {
  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 10,
      }}
    >
      <h4>ReactJS Ant-Design Result Component</h4>
      <Result
        status="warning"
        title="Something went wrong. Please try again after some time"
      />
    </div>
  );
};

export default Nav6;
