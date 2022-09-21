import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IUserReducer {
  userInfo: string | null;
}

const initialState: IUserReducer = {
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    putUserInfo: (state, action: PayloadAction<string | null>) => ({
      ...state,
      userInfo: action.payload,
    }),
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
