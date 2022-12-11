import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

import { handleRegisterApi } from "../../services/userService";
export const addUserSuccess = () => ({
  type: actionTypes.ADD_USER_SUCCESS,
});
export const userLoginSucces = (userInfo) => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  userInfo: userInfo,
});

export const userLoginFail = () => ({
  type: actionTypes.USER_LOGIN_FAIL,
});

export const processLogout = () => ({
  type: actionTypes.PROCESS_LOGOUT,
});

export const registerService = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await handleRegisterApi(data);
      if (
        res &&
        res.result &&
        res.result.results &&
        res.result.results.Success === true
      ) {
        toast.success("Đănhg kí tài khoản thành công!");
        dispatch(registerServiceSuccess());
      } else {
        dispatch(registerServiceFail());
      }
    } catch (error) {
      dispatch(registerServiceFail());
      console.log("registerServiceFail:", error);
    }
  };
};

export const registerServiceSuccess = () => ({
  type: actionTypes.REGISTER_SUCCESS,
});

export const registerServiceFail = () => ({
  type: actionTypes.REGISTER_FAILED,
});
