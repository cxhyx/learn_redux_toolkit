import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: '哈哈' },
  { id: '1', name: 'cxh' },
  { id: '2', name: 'yx' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
//* state.users users 是根据 index.js 中的 reducer 的
// * reducer掌管所有的state状态

export default usersSlice.reducer;
