import { useEffect, useState } from 'react';
import { Warp } from "./style";
import { useDispatch } from "react-redux";
import { getUserInfo, login } from "@/store/global/actions";
import { LoginForm, ProFormCheckbox, ProFormText } from "@ant-design/pro-components";
import { LockOutlined, UserOutlined, VerifiedOutlined } from "@ant-design/icons";
import type { AppDispatch } from "@/store";
import { reqCaptcha } from "@/common/api";

interface ILoginForm {
  username: string;
  password: string;
  captchaId: string;
  code: string;
}

const Login = () => {
  const [captchaIdone, setCaptchaIdone] = useState('');
  const [picPath, setpicPath] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  // 初始化时生成图形验证码和请求后端验证码图片
  useEffect(() => {
    fetchCaptchaImage();
  }, []);


  const fetchCaptchaImage = async () => {
    try {
      const response = await reqCaptcha();
      setCaptchaIdone(response.data.captchaId);
      setpicPath(response.data.picPath);
    } catch (error) {
      console.error(error)
    }
  };

  const onFinish = async (values: ILoginForm) => {
    const newsvalue = {
      username: values.username,
      password: values.password,
      captchaId: captchaIdone,
      code: values.code,
    }

    const { data: { token } } = await dispatch(login(newsvalue));
    dispatch(getUserInfo(token));
  };


  return <Warp>
    <div className={"login"}>
      <LoginForm<ILoginForm>
        onFinish={values => onFinish(values)}
        title="新闻后台"
        subTitle=" "
      >
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: "large",
              prefix: <UserOutlined className={"prefixIcon"} />,
            }}
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: "large",
              prefix: <LockOutlined className={"prefixIcon"} />,
            }}
            rules={[
              {
                required: true,
                message: "请输入密码！",
              },
            ]}
          />
          <div style={{
            display: 'inline-flex'
          }}
          >
            <ProFormText
              name="code"
              fieldProps={{
                size: "large",
                prefix: <VerifiedOutlined className={"prefixIcon"} />,
              }}
              rules={[
                {
                  required: true,
                  message: "请输入验证码!",
                },
              ]}
              width="sm"
            />
            <img className='ant-form-large ant-form-item ant-form-item-control-input ant-input-affix-wrapper css-dev-only-do-not-override-bvtb8s ' src={picPath} alt="Captcha" onClick={fetchCaptchaImage}
              style={{
                maxWidth: "125px",
              }} />
          </div>
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
          </div>
        </>
      </LoginForm>
    </div>
    <div className="g-polygon-1"></div>
    <div className="g-polygon-2"></div>
    <div className="g-polygon-3"></div>
  </Warp>;

};

export default Login;