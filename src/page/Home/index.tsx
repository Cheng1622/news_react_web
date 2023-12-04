import { ProCard } from "@ant-design/pro-components";
import Overview from "./Overview";
import { Col, Row } from "antd";

export const Workplace = () => {

  return (

    <Row gutter={[8, 8]}>
      <Col xs={24} sm={24} md={16} lg={16} xl={16}>
        <ProCard bordered ghost >
          <Overview />
        </ProCard>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <ProCard bordered >
          Content 2
        </ProCard>
      </Col>

    </Row>

  );
}
  ;

export default Workplace;