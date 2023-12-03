type PromiseDta<T = Data> = Promise<T>

export interface Data {
  code: number;
  msg: string;
  data?: any;
}

export type IResponseCaptcha = PromiseDta<{
  code: number
  data: {
    captchaId: string
    picPath: string
  }
  msg: string
}>

export type IResponseLogin = PromiseDta<{
  code: number
  data: {
    token: string
  }
  msg: string
}>


export type IResUserInfo = PromiseDta<{
  data: {
    userInfo: UserInfo
  }
  msg: string
  code: number
}>

export interface UserInfo {
  avatar: string;
  email: string;
  introduction: string;
  mobile: string;
  nickname: string;
  roles: any[];
  userid: string;
  username: string;
}


export type IResLogout = PromiseDta<{
  data: {
    status: number
  }
  msg: string
  code: number
}>