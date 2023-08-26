import React from "react";
import { Statistic } from "antd";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60;

const Nav1 = () => {
  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 10,
      }}
    >
      <h4>ReactJS Ant-Design Statistic Component</h4>
      <Countdown
        title="1 Minute Timer:"
        value={deadline}
        format="HH:mm:ss:SSS"
      />
    </div>
  );
};

export default Nav1;
