import React from "react";
import { Tooltip, Button } from "antd";

const Nav5 = () => {
  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 10,
      }}
    >
      <h4>ReactJS Ant-Design Tooltip Component</h4>
      <Tooltip placement="bottom" title={"Hii, I am sample tooltip."}>
        <Button>Over me to see tooltip information!</Button>
      </Tooltip>
    </div>
  );
};

export default Nav5;
