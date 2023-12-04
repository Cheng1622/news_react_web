import {Outlet} from "react-router-dom";
import {Layout} from "antd";

const {Content} = Layout;

export default () => {

  return (
    <Content className={"layout-content"}>
      <Outlet/>
    </Content>
  );
}