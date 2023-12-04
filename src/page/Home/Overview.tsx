import { selectGlobal } from "@/store/global/selectors";
import { ProCard } from "@ant-design/pro-components";
import { Avatar } from "antd";
import { useSelector } from "react-redux";



export const Overview = () => {
  const { userInfo } = useSelector(selectGlobal);
  return (
    <>
      <ProCard layout="center" bordered>
        <Avatar
          style={{
            cursor: "pointer",
          }}
          size={40}
          src={<img src={userInfo?.avatar} alt="avatar" />}
        />
        早安 {userInfo?.username}，开始您一天的工作吧！
      </ProCard>
    </>
  );
};
export default Overview;