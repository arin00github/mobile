import {userAction, IUserReducer} from './user.slice';

export interface userState {
  user: IUserReducer;
}

export const {putUserInfo} = userAction;

export const selectUserInfo = (state: userState) => state.user;
