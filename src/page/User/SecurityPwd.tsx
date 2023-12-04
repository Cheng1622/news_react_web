import { ProForm, ProFormCascader, ProFormSelect, ProFormText, ProFormTextArea, ProFormUploadDragger, } from "@ant-design/pro-components";
import { message, Space } from "antd";

const SecurityPwd = () => {
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
            <ProFormText.Password
                name="password"
                label="原密码"
                fieldProps={{
                    size: "large",
                }}
                rules={[
                    {
                        required: true,
                        message: "请输入原密码!",
                    },
                ]}
            />
             <ProFormText.Password
                name="password"
                label="新密码"
                fieldProps={{
                    size: "large",
                }}
                rules={[
                    {
                        required: true,
                        message: "请输入新密码!",
                    },
                ]}
            />
             <ProFormText.Password
                name="password"
                label="确认密码"
                fieldProps={{
                    size: "large",
                }}
                rules={[
                    {
                        required: true,
                        message: "请输入确认密码!",
                    },
                ]}
            />
        </ProForm>
    );
};

export default SecurityPwd;