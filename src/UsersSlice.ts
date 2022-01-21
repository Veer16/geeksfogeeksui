import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UsersSlice = createSlice({
  name: "UsersSlice",
  initialState: new Array<IUser>(), //if we provide empty array [] it doesn't know what data type
  reducers: {
    // _state the underscore in the vaiable will let u define the variable even if we don't use it
    completed(_state: IUser[], action: PayloadAction<IUser[]>) {
      return action.payload;
    },
    started(_state: IUser[]) {
      return [];
    },
  },
});
// it can be used in components to dispatch hook
export const { completed, started } = UsersSlice.actions;

// it can be used in AppState in combineReducers

export default UsersSlice.reducer;
