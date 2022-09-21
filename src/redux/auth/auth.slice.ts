import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IAuthReducer {
  authInfo: string | null;
}

const initialState: IAuthReducer = {
  authInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    putAuthInfo: (state, action: PayloadAction<string | null>) => ({
      ...state,
      authInfo: action.payload,
    }),
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
