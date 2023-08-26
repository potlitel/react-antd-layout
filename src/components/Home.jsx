import React from "react";
import { Col, Divider, Row } from "antd";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
const Home = () => {
  return (
    <>
      <Divider orientation="left">Align Middle</Divider>
      <Row justify="space-around" align="middle">
        <Col span={4}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>
    </>
  );
};

export default Home;
