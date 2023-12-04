import { ProForm, ProFormCascader, ProFormSelect, ProFormText, ProFormTextArea, ProFormUploadDragger, } from "@ant-design/pro-components";
import { message, Space } from "antd";

const InfoForm = () => {
  return (
    <ProForm
      layout={"horizontal"}
      labelCol={{ span: 4 }}
      submitter={{
        onSubmit: () => {
          message.success("success");
        },
        render: (props, dom) => <Space style={{
          width: "100%",
          justifyContent: "center",
        }}>
          {dom}
        </Space>,
      }}
    >
      <ProFormUploadDragger name="avatar" label="头像" />
      <ProFormText 
      name="nickname"
      label="昵称"
      >
      </ProFormText>
      <ProFormText 
      name="mobile"
      label="手机号"
      >
      </ProFormText>
      <ProFormText 
      name="email"
      label="邮箱"
      >
      </ProFormText>
      <ProFormTextArea 
      name="introduction"
      label="介绍"
      >
      </ProFormTextArea>
    </ProForm>
  );
};

export default InfoForm;