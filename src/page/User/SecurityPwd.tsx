import { reqChangePwd } from "@/common/api";
import { AppDispatch } from "@/store";
import { logout } from "@/store/global/actions";
import { selectGlobal } from "@/store/global/selectors";
import { ProForm, ProFormCascader, ProFormSelect, ProFormText, ProFormTextArea, ProFormUploadDragger, } from "@ant-design/pro-components";
import { message, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";

interface IPutPwdForm {
    oldPassword: string;
    newPassword: string;
}

const SecurityPwd = () => {
    const { token } = useSelector(selectGlobal);
    const dispatch = useDispatch<AppDispatch>();
    const onFinish = async (values: IPutPwdForm) => {
        const newsvalue = {
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
        }
        const { code, msg } = await reqChangePwd(token, newsvalue);
        if (code === 1000) {
            message.success(msg);
            setTimeout(() => {
                dispatch(logout(token));
            }, 2000);
        }
    };

    return (
        <ProForm<IPutPwdForm>
            layout={"horizontal"}
            labelCol={{ span: 4 }}
            onFinish={values => onFinish(values)}
        >
            <ProFormText.Password
                name="oldPassword"
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
                name="newPassword1"
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
                name="newPassword"
                label="确认密码"
                fieldProps={{
                    size: "large",
                }}
                rules={[
                    {
                        required: true,
                        message: "请输入确认密码!",
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('newPassword1') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject("两次密码输入不一致")
                        }
                    })
                ]}
            />
        </ProForm>
    );
};

export default SecurityPwd;