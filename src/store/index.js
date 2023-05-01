import { configureStore } from '@reduxjs/toolkit';
import dic from './dic';
import counterReducer from './counterSlice';
import postsReducer from './postsSlice';
import userReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    dic,
    counter: counterReducer,
    posts: postsReducer,
    users: userReducer,
  },
});
