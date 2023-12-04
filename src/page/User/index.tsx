import Header from "./Info";
import {ProCard} from "@ant-design/pro-components";
import InfoForm from "./InfoForm";
import styled from "styled-components";
import {useState} from "react";
import { Col, Row } from "antd";
import SecurityPwd from "./SecurityPwd";

const Warp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Setting = () => {
  const [activeKey, setActiveKey] = useState("basicInfo");

  return (
  <Row gutter={[8, 8]}>
  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
    <ProCard  bordered  title="我的信息" >
    <Header/>
    </ProCard>
  </Col>
  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
  <ProCard
      tabs={{
        activeKey: activeKey,
        items: [
          {
            label: `修改信息`,
            key: "basicInfo",
            children: <InfoForm/>,
          },
          {
            label: `修改密码`,
            key: "securityPwd",
            children: <SecurityPwd/>,
          },
        ],
        onChange: setActiveKey,
      }}
      bordered 
    >
    </ProCard>
  </Col>

</Row>





  );
};
export default Setting;