import React from "react";
import { Steps } from "antd";
const { Step } = Steps;

const Nav2 = () => {
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
      <h4>ReactJS Ant-Design Steps Component</h4>
      <Steps current={1}>
        <Step title="Waiting" description="Waiting for the resources" />
        <Step title="Finished" description="Finished my second step" />
        <Step title="In Progress" description="Work under progress" />
      </Steps>
    </div>
  );
};

export default Nav2;
