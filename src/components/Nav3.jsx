import React from "react";
import { Timeline } from "antd";
// import "antd/dist/antd.css";

const Nav3 = () => {
  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 10,
        // justifyContent: "center",
        // justifyItems: "center",
      }}
    >
      <h4>Demo for Timeline</h4>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Nav3;
