import { USER_LOGIN, USER_LOGOFF, TOGGLE_BLUR, TOGGLE_THEME } from "../";

export const userLogin = (email: string, password: number) => ({
  type: USER_LOGIN,
  payload: {email, password}
});

export const userLogOff = () => {
  return {
    type: USER_LOGOFF
  };
};

export const toggleBlur = () => {
  return {
    type: TOGGLE_BLUR
  };
};

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME
  };
};