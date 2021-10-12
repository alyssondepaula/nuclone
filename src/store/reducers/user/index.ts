import { AnyAction } from 'redux'
import { Reducer } from 'redux';
import { USER_LOGIN, USER_LOGOFF } from "../../actions";


export type IUser = {
    data: {
        email: string,
        password: string
    },
    loading: boolean
}


const initialState: IUser = {
  data: {
      email: "alyssonjuniordepaula@gmail.com",
      password: "123456"
    },
    loading: true
};

export const userReducer: Reducer<any, AnyAction> = (state: IUser = initialState, action: AnyAction) => {
  switch (action.type) {
    case USER_LOGIN:
        return { ...state, data: {
            email: "alyssonjuniordepaula@gmail.com",
            password: "123456"
          }};
    case USER_LOGOFF:  
    return { ...state, data: {} };

    default:
      return state;
  }

}