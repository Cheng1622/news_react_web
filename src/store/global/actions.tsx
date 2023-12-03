import { reqLogin, reqUserInfo, reqLogout } from "@/common/api";
import globalAction from "./constants";
import { setToken, setUserInfo as setInfo } from "@/utils";
import { resetTopHeaderState } from "@/store/topHeader/actions";
import type { ResetUserInfoAction, SetUserInfoAction, SetUserTokenAction } from "./actionTypes";
import type { UserInfo } from "@/common/api/type";
import type { AppThunk } from "@/store";
import { message } from "antd";

export const login = ({ username, password, captchaId, code }: { username: string, password: string, captchaId: string, code: string }): AppThunk<ReturnType<typeof reqLogin>> => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      reqLogin({ username, password, captchaId, code }).then(res => {
        const { token } = res.data;
        dispatch(setUserToken(token));
        setToken(token);
        resolve(res);
      }).catch(error => {
        reject(error);
        message.error(error.data)
      });
    });
  };
};
export const getUserInfo = (token: string): AppThunk<ReturnType<typeof reqUserInfo>> => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      reqUserInfo(token).then(res => {
        const { userInfo } = res.data;
        dispatch(setUserInfo(userInfo));
        setInfo(userInfo);
        resolve(res);
      }).catch(error => {
        reject(error);
      });
    });
  };
};
export const logout = (token: string): AppThunk => {
  return (dispatch) => new Promise((resolve, reject) => {
    reqLogout(token).then(res => {
        localStorage.removeItem("token");
        dispatch(resetUserInfo());
        dispatch(setUserToken(""));
        dispatch(resetTopHeaderState());
        // dispatch(resetThemeState());
        resolve(true);
    }).catch(error => {
      reject(false);
    });

  });

};
const setUserToken = (token: string): SetUserTokenAction => ({
  type: globalAction.USER_SET_USER_TOKEN,
  token: token,
});

const setUserInfo = (userInfo: UserInfo): SetUserInfoAction => {
  return {
    type: globalAction.USER_SET_USER_INFO,
    userInfo: userInfo,
  };
};

const resetUserInfo = (): ResetUserInfoAction => (
  { type: globalAction.USER_RESET_USER }
);