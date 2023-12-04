import { Avatar, Dropdown, Modal, Space } from "antd";
import { ExclamationCircleFilled, UserOutlined } from "@ant-design/icons";
import { logout } from "@/store/global/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "@/components/Icon";
import { selectGlobal } from "@/store/global/selectors";
import type { MenuProps } from "antd";
import { AppDispatch } from "@/store";

const { confirm } = Modal;

const UserAvatar = () => {
  const { userInfo, token } = useSelector(selectGlobal);
  const dispatch = useDispatch<AppDispatch>();
  const navigator = useNavigate();

  const items: MenuProps["items"] = [
    {
      label: (<Space
        onClick={(e) => {
          navigator("/user/info");
        }}>
        <UserOutlined />
        个人中心
      </Space>),
      key: "/user/info",
    },
    {
      type: "divider",
      key: "divider"
    },
    {
      label: (<Space
        onClick={() => {
          confirm({
            title: "温馨提示",
            icon: <ExclamationCircleFilled />,
            content: "是否确认退出",
            onOk() {
              dispatch(logout(token));
            },
          });
        }}>
        <LogoutIcon />
        退出登录
      </Space>),
      key: "logout",
    },
  ];
  return (
    <Dropdown placement={"bottomLeft"} menu={{ items }}>
      <Avatar
        style={{
          cursor: "pointer",
        }}
        size={28}
        src={<img src={userInfo?.avatar} alt="avatar" />}
      >
      </Avatar>
    </Dropdown>
  );
};

export default UserAvatar;