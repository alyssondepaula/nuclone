import { AnyAction } from 'redux'
import { Reducer } from 'redux';
import { USER_LOGIN, USER_LOGOFF, TOGGLE_BLUR, TOGGLE_THEME } from "../../actions";


export type IUser = {
    data: {
      userName: string
      email: string
      cardLimit: string
      invoice: string
    },
    loading: boolean,
    isBlur: boolean
    isDark: boolean
}


const initialState = {
  data: {
    userName: 'Alysson',
    email: 'alyssonjuniordepaula@gmail.com',
    cardLimit: '100,00',
    invoice: '10,00',
    },
    loading: true,
    isBlur: true,
    isDark: false
   
};

export const userReducer: Reducer<any, AnyAction> = (state: IUser | undefined = initialState, action: AnyAction) => {
  switch (action.type) {
    case USER_LOGIN:
        return { ...state,
          
          data: {
          userName: 'Alysson',
          email: 'alyssonjuniordepaula@gmail.com',
          cardLimit: '100,00',
          invoice: '10,00',
          },
          loading: true,
          isBlur: true,
          isDark: false
         
        };

    case USER_LOGOFF:  
    return { ...state, data: {} };

    case TOGGLE_BLUR:  
    return { ...state, isBlur: !state.isBlur };

    case TOGGLE_THEME:  
    return { ...state, isDark: !state.isDark  };

    default:
      return state;
  }

}