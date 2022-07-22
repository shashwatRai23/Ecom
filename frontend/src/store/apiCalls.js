import { userActions } from "./userSlice";
import { userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(userActions.loginStart());
  try {
    const res = await userRequest.post("/auth/login", user);
    dispatch(userActions.loginSuccess(res.data));
  } catch (err) {
    dispatch(userActions.loginFailure());
  }
};
