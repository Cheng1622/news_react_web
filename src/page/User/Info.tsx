import { Avatar} from "antd";
import { ProCard, ProDescriptions } from "@ant-design/pro-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectGlobal } from "@/store/global/selectors";
import type { ProDescriptionsItemProps } from "@ant-design/pro-components";

const Header = () => {
  const { userInfo } = useSelector(selectGlobal);
  const [dataSource, setDataSource] = useState({
    userName: userInfo?.username,
    nickName: userInfo?.nickname,
    rolesName:userInfo?.roles?.[0]?.name,
    userid: userInfo?.userid,
    mobile: userInfo?.mobile,
    email: userInfo?.email,
  });

  const columns: ProDescriptionsItemProps[] = [
    {
      title: "用户名",
      key: "text",
      dataIndex: "userName",
    },
    {
      title: "昵称",
      key: "nickName",
      dataIndex: "nickName",
      valueType: "text",
    },
    {
      title: "最高角色",
      key: "rolesName",
      dataIndex: "rolesName",
      valueType: "text",
    },
    {
      title: "账号 ID",
      dataIndex: "userid",
    },
    {
      title: "绑定手机号",
      dataIndex: "mobile",
      valueType: "text",

    },
    {
      title: "邮箱",
      key: "email",
      dataIndex: "email",
      valueType: "text",

    },
  ];

  return (
    <ProCard layout="center" split="horizontal" >
      <Avatar size={120} src={userInfo?.avatar}></Avatar>
      <span style={{
        fontSize: "20px",
        color: "black",
      }}>{userInfo?.username}</span>
      <span style={{
        fontSize: "12px",
        color: "#909399",
      }}>{userInfo?.roles?.[0]?.name}</span>

      <ProDescriptions
        column={2}
        title="介绍"
      >
        <ProDescriptions.Item
          valueType="text"
        >
          {userInfo?.introduction}
        </ProDescriptions.Item>
      </ProDescriptions>

      <ProDescriptions
      style={{
        paddingTop:"20px"
      }}
        column={2}
        title="基本信息"
        request={() => {
          return Promise.resolve({
            data: dataSource,
            success: true,
          });
        }}
        columns={columns}
      >
      </ProDescriptions>
    </ProCard>


  );
};

export default Header;