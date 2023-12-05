import createAxiosByInterceptors from "@/service";
import type { IResponseLogin, IResUserInfo, IResponseCaptcha, Data, IResponseApi } from "./type";
import { AxiosRequestConfig } from "axios";


export const request = createAxiosByInterceptors({
  baseURL: "/dev-api",
});
export const reqCaptcha = (): IResponseCaptcha => {
  return request.get("/api/v1/base/captcha");
};
export const reqLogin = (params: { username: string, password: string, captchaId: string, code: string }): IResponseLogin => {
  return request.post("/api/v1/base/login", { ...params });
};
export const reqUserInfo = (token: string): IResUserInfo => {
  const config: AxiosRequestConfig = {
    headers: {
      'auth-token': token,
    },
  };
  return request.get("/api/v1/user/info", config);
}

export const reqLogout = (token: string): IResponseApi => {
  const config: AxiosRequestConfig = {
    headers: {
      'auth-token': token,
    },
  };
  return request.get("/api/v1/user/logout", config);

}


export const reqChangePwd = (token: string,params: { oldPassword: string, newPassword: string}):IResponseApi => {
  const config: AxiosRequestConfig = {
    headers: {
      'auth-token': token,
    },
  };
  return request.put("/api/v1/user/changePwd", { ...params },config);
}