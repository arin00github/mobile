import {authAction, IAuthReducer} from './auth.slice';

export interface authState {
  auth: IAuthReducer;
}

export const {putAuthInfo} = authAction;

export const selectAuthInfo = (state: authState) => state.auth;
